import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { ServiceTitle } from "@/data/services";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-secondary origin-left z-[100]"
        style={{ scaleX }}
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
