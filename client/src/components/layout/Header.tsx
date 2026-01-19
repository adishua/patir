import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "איך זה עובד", to: "how-it-works" },
  { name: "למה פתיר", to: "why-us" },
  { name: "שירותים", to: "services" },
  { name: "אודות", to: "about" },
  { name: "המלצות", to: "testimonials" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Gavel className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">פתיר</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-base font-medium text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
              <Button className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 rounded-full px-6">
                צור קשר
              </Button>
            </ScrollLink>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-lg font-medium text-gray-700 p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-white mt-2">
                צור קשר
              </Button>
            </ScrollLink>
          </div>
        )}
      </div>
    </header>
  );
}
