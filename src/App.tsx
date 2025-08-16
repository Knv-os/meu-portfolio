import ParticlesBackground from "./components/ParticlesBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero.tsx";
import About from "./components/sections/About.tsx";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact.tsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
