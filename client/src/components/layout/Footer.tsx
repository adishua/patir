import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#1F3C88] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="פתיר" className="h-12 w-auto brightness-0 invert" />
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
              <li><a href="/" className="hover:text-white transition-colors">בית</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">שירותים</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">צור קשר</a></li>
              <li>
                <Link href="/accessibility">
                  <a className="hover:text-white transition-colors">הצהרת נגישות</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">תחומי עיסוק</h4>
            <ul className="space-y-3 text-blue-100">
              <li>סגירת תיק פלילי</li>
              <li>מחיקת רישום משטרתי</li>
              <li>שינוי עילת סגירה</li>
              <li>חנינות</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">פרטי התקשרות</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>050-1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>office@patir.co.il</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>מגדלי עזריאלי, תל אביב</span>
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
