import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                {/* lawyer portrait professional */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="עו״ד ברק כהן"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white py-3 px-6 rounded-lg shadow-lg border border-gray-100">
                <p className="text-sm font-semibold text-gray-500">מייסד המשרד</p>
                <p className="text-lg font-bold text-primary">עו״ד ברק כהן</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">קצת עלינו</h2>
              <h3 className="text-xl font-medium text-secondary mb-6">משרד עורכי דין המתמחה במשפט הפלילי</h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  "פתיר" הוקמה מתוך חזון להנגיש את השירות המשפטי לכל אזרח, בצורה המהירה והמקצועית ביותר.
                  אנו מאמינים שלכל אדם מגיעה הזדמנות שנייה, ודף נקי מול הרשויות.
                </p>
                <p>
                  המשרד בראשות עו״ד ברק כהן מתמחה בטיפול בתיקים פליליים, מחיקת רישומים משטרתיים ובקשות חנינה.
                  עם ניסיון של מעל 15 שנה ואלפי סיפורי הצלחה, פיתחנו שיטה ייחודית המאפשרת טיפול יעיל וממוקד.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "חבר לשכת עורכי הדין בישראל משנת 2008",
                  "יוצא פרקליטות מחוז תל אביב",
                  "התמחות ייחודית במחיקת רישום פלילי"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
