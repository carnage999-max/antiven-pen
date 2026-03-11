import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemVisualization from './components/ProblemVisualization';
import HowItWorks from './components/HowItWorks';
import VenomEmergencies from './components/VenomEmergencies';
import Products from './components/Products';
import Science from './components/Science';
import FieldUse from './components/FieldUse';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemVisualization />
        <HowItWorks />
        <VenomEmergencies />
        <Products />
        <Science />
        <FieldUse />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
