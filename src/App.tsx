import { useTheme } from '@/hooks/useTheme';
import MultiplayerCursors from '@/components/MultiplayerCursors';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { theme, toggle } = useTheme();

  const handleHireMe = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-obsidian-900 transition-colors duration-300 dark:bg-obsidian-980 dark:text-white">
      <MultiplayerCursors />
      <Navbar theme={theme} onToggleTheme={toggle} onHireMe={handleHireMe} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
