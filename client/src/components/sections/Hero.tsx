import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/bright_professional__472cb7a3.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform origin-top translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6">
                שירותים משפטיים אונליין
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-primary">
                הדרך המהירה <br/>
                <span className="text-secondary">לסגירת התיק שלך</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                פתרון משפטי מהיר, מקצועי ודיסקרטי ללא בירוקרטיה מיותרת.
                אנו מטפלים בבקשות לסגירת תיקים, מחיקת רישום, ושינוי עילת סגירה ביעילות מקסימלית.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                    בדיקת זכאות חינם
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </ScrollLink>
                <ScrollLink to="how-it-works" smooth={true} duration={500} offset={-80}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-2 hover:bg-gray-50">
                    איך זה עובד?
                  </Button>
                </ScrollLink>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>מקצועיות</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>שקיפות</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>ללא התחייבות</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white"
            >
              <img 
                src={heroImage} 
                alt="Legal Services" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">אחוזי הצלחה</p>
                  <p className="text-2xl font-bold text-gray-900">96%</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
