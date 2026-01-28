import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { ServiceTitle } from "@/data/services";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      {/* Scroll Progress Bar - Pure CSS transform for better performance */}
      <div
        className="fixed top-0 left-0 right-0 h-1.5 bg-secondary origin-left z-[100] transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Header onContactClick={() => setSelectedService(ServiceTitle.OTHER)} />

      <main className="flex-grow">
        <Hero />
        <Services onSelectService={setSelectedService} />
        <HowItWorks />
        <WhyUs />
        <About />
        <Testimonials />
        <Contact selectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
