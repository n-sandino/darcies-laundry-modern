import { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refMap: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      home: homeRef,
      services: servicesRef,
      about: aboutRef,
      contact: contactRef,
    };

    const targetRef = refMap[section] || homeRef;
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />

      <main>
        <div ref={homeRef}>
          <Hero onNavigate={handleNavigate} />
        </div>

        <div ref={servicesRef}>
          <Services />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
