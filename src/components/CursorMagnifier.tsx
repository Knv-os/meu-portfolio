import React, { useEffect, useRef, useState } from "react";

// Simple debounce helper
function debounce<T extends (...args: any[]) => void>(fn: T, wait = 200) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait);
  };
}

const LENS_SIZE = 180; // px (diameter)
const ZOOM = 2; // magnification level

const CursorMagnifier: React.FC = () => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
  const capturingRef = useRef(false);

  const captureViewport = async () => {
    const w = window as any;
    const html2canvas = w.html2canvas as any | undefined;
    if (!html2canvas || capturingRef.current) return;

    try {
      capturingRef.current = true;
      // Capture the CURRENT viewport only for performance
      const canvas: HTMLCanvasElement = await html2canvas(document.body, {
        useCORS: true,
        backgroundColor: null,
        logging: false,
        // Avoid capturing the lens itself
        ignoreElements: (el: Element) => el.id === "cursor-magnifier",
        // Scale 1 keeps output 1:1 with CSS px for simpler math
        scale: 1,
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });

      setBgUrl(canvas.toDataURL("image/png"));
      setCanvasSize({ w: canvas.width, h: canvas.height });
    } catch (e) {
      // Fail silently; the component will just not show magnification.
      // eslint-disable-next-line no-console
      console.warn("CursorMagnifier: html2canvas capture failed", e);
    } finally {
      capturingRef.current = false;
    }
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    // Initial capture (after html2canvas is available)
    const tryInitial = () => {
      const hasLib = Boolean((window as any).html2canvas);
      if (hasLib) {
        captureViewport();
      } else {
        // Poll briefly for the script to load
        const id = window.setInterval(() => {
          if ((window as any).html2canvas) {
            window.clearInterval(id);
            captureViewport();
          }
        }, 100);
        // Stop polling after a short time
        window.setTimeout(() => window.clearInterval(id), 3000);
      }
    };
    tryInitial();

    const onResize = debounce(() => captureViewport(), 250);
    const onScroll = debounce(() => captureViewport(), 250);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll as any);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radius = LENS_SIZE / 2;
  const show = pos.x !== -9999 && bgUrl !== null;

  const style: React.CSSProperties = show
    ? {
        position: "fixed",
        left: `${pos.x - radius}px`,
        top: `${pos.y - radius}px`,
        width: `${LENS_SIZE}px`,
        height: `${LENS_SIZE}px`,
        borderRadius: "9999px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
        // White border for the "lupa" ring
        boxShadow: "0 0 0 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.35)",
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${canvasSize.w * ZOOM}px ${canvasSize.h * ZOOM}px`,
        backgroundPosition: `-${pos.x * ZOOM - radius}px -${pos.y * ZOOM - radius}px`,
        // Slight inner outline
        outline: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "none",
      }
    : {
        // Fallback while screenshot isn't ready: subtle spotlight
        position: "fixed",
        left: `${pos.x - radius}px`,
        top: `${pos.y - radius}px`,
        width: `${LENS_SIZE}px`,
        height: `${LENS_SIZE}px`,
        borderRadius: "9999px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: "0 0 0 2px rgba(255,255,255,0.7), 0 4px 16px rgba(0,0,0,0.35)",
        backdropFilter: "saturate(1.2) brightness(1.05) blur(0px)",
      };

  return <div id="cursor-magnifier" style={style} />;
};

export default CursorMagnifier;
