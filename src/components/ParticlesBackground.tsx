import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.2,
            },
            push: {
              quantity: 8,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff"],
          },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.8,
            width: 2,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 30,
          },
          opacity: {
            value: {
              min: 0.6,
              max: 1.0,
            },
          },
          shape: {
            type: ["circle", "square"],
          },
          size: {
            value: {
              min: 2,
              max: 6,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
