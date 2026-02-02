import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="hero-reveal">
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
              שירות משפטי בהובלת עו״ד ברק כהן
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              הדרך המהירה <br/>
              <span className="text-blue-300">לסגירת התיק שלך</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              פתרון משפטי מהיר, מקצועי ודיסקרטי ללא בירוקרטיה מיותרת.
              אנו מטפלים בבקשות לסגירת תיקים, מחיקת רישום, ושינוי עילת סגירה ביעילות מקסימלית.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/30 text-white">
                  בחירת שירות
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-2 border-white/30 hover:bg-white/10 text-white backdrop-blur-sm">
                  איך זה עובד?
                </Button>
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-right max-w-3xl mx-auto">
              <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white justify-center sm:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>מקצועיות</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  את השירות מוביל עורך דין ברק כהן המתמחה בדין הפלילי ובזכויות אדם
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white justify-center sm:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>שקיפות</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  השירות ניתן תוך מתן הסבר שוטף ביחס לכל שלבי הטיפול עד לסיומו
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white justify-center sm:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>ללא התחייבות</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  לאחר מילוי טופס ושיחה אישית עימנו תועבר הצעת מחיר כתובה וסופית
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
