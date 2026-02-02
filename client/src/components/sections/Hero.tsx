import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/barak.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900">
      {/* Lawyer Background Image - Subtle, Left Side Only */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-full lg:w-[65%] h-full">
          <img
            src={heroImage}
            alt="Legal Services"
            className="w-full h-full object-cover object-top opacity-15 blur-sm"
          />
        </div>
        {/* Gradient mask to fade image seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-blue-900/50 via-50% to-blue-900 to-65%" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-reveal">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-400/30">
                שירות משפטי בהובלת עו״ד ברק כהן
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                הדרך המהירה <br/>
                <span className="text-blue-300">לסגירת התיק שלך</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                פתרון משפטי מהיר, מקצועי ודיסקרטי ללא בירוקרטיה מיותרת.
                אנו מטפלים בבקשות לסגירת תיקים, מחיקת רישום, ושינוי עילת סגירה ביעילות מקסימלית.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
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
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                    איך זה עובד?
                  </Button>
                </a>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 font-bold text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>מקצועיות</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    את השירות מוביל עורך דין ברק כהן המתמחה בדין הפלילי ובזכויות אדם
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 font-bold text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>שקיפות</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    השירות ניתן תוך מתן הסבר שוטף ביחס לכל שלבי הטיפול עד לסיומו
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 font-bold text-white">
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
      </div>
    </section>
  );
}
