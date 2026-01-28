import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo_optimized.webp";

const navItems = [
  { name: "איך זה עובד", to: "how-it-works" },
  { name: "למה פתיר", to: "why-us" },
  { name: "שירותים", to: "services" },
  { name: "אודות", to: "about" },
];

function NavLink({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  const handleClick = () => {
    if (isHome) {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setLocation(`/#${to}`);
    }
    onClick?.();
  };

  if (isHome) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        offset={-80}
        className={className}
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <a href={`/#${to}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export function Header({ onContactClick }: { onContactClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setLocation("/");
            }
          }}>
            <img src={logoImg} alt="פתיר" className="h-12 w-auto" width="48" height="48" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="text-base font-medium text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <NavLink to="contact" onClick={onContactClick}>
              <Button
                className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 rounded-full px-6"
              >
                צור קשר
              </Button>
            </NavLink>

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
              <NavLink
                key={item.name}
                to={item.to}
                className="text-lg font-medium text-gray-700 p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink to="contact" onClick={() => {
              setIsOpen(false);
              onContactClick?.();
            }}>
              <Button className="w-full bg-primary text-white mt-2">
                צור קשר
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
