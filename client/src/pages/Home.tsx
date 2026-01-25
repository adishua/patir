import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<number>();
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
      
      <Header onContactClick={() => setSelectedServiceId(0)} />
      
      <main className="flex-grow">
        <Hero />
        <Services onSelectService={setSelectedServiceId} />
        <HowItWorks />
        <WhyUs />
        <About />
        <Testimonials />
        <Contact selectedServiceId={selectedServiceId} />
      </main>

      <Footer />
    </div>
  );
}
