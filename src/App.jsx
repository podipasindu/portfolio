import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Technologies from './assets/components/Technologies';
import Experience from './assets/components/Experience';
import Projects from './assets/components/Projects';
import DownloadCV from './assets/components/DownloadCV'; 
import Contact from './assets/components/Contact';



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <DownloadCV />
        <Contact />
        
      </div>
    </div>
  );
};

export default App;

