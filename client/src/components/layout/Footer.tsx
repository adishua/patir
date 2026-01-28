import { Link, useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/logo_optimized.webp";

function FooterNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setLocation(`/#${to}`);
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} className="hover:text-white transition-colors">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1F3C88] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="פתיר" className="h-12 w-auto brightness-0 invert" width="48" height="48" />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              פתרונות משפטיים מהירים, מקצועיים ודיסקרטיים.
              אנחנו כאן כדי להחזיר את השקט לחיים שלך.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">קישורים מהירים</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/" className="hover:text-white transition-colors">בית</Link></li>
              <li><FooterNavLink to="about">אודות</FooterNavLink></li>
              <li><FooterNavLink to="services">שירותים</FooterNavLink></li>
              <li><FooterNavLink to="contact">צור קשר</FooterNavLink></li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">פרטי התקשרות</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>054-7337115</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@patir.net</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>ראול וולנברג 6, תל אביב</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© {new Date().getFullYear()} פתיר. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
