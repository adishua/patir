import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceTitle } from "@/data/services";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy-load below-fold sections
const Services = lazy(() => import("@/components/sections/Services"));
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks"));
const WhyUs = lazy(() => import("@/components/sections/WhyUs"));
const About = lazy(() => import("@/components/sections/About"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Contact = lazy(() => import("@/components/sections/Contact"));

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
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Services onSelectService={setSelectedService} />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Contact selectedService={selectedService} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
