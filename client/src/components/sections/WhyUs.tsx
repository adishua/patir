import { Clock, Lock, Award, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "חיסכון בזמן",
    description: "תהליך דיגיטלי מהיר שחוסך לך הגעה פיזית למשרדים ופגישות מיותרות."
  },
  {
    icon: Lock,
    title: "דיסקרטיות מוחלטת",
    description: "המידע שלך מאובטח ומוגן. אנו מתחייבים לסודיות מלאה לאורך כל התהליך."
  },
  {
    icon: Award,
    title: "מומחיות מוכחת",
    description: "צוות עורכי דין מנוסה המתמחה במשפט הפלילי ובמחיקת רישומים."
  },
  {
    icon: Zap,
    title: "מחיר שקוף והוגן",
    description: "ללא הפתעות וללא אותיות קטנות. תדע בדיוק כמה תשלם מראש."
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">למה פתיר?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-elevate transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 leading-relaxed">
                      כל השירותים מנוהלים על ידי עורכי דין מנוסים, בתהליך דיגיטלי מלא.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-elevate transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 leading-relaxed">
                      השירותים שלנו מתאימים לכל מי שזקוק לפתרון ממוקד, מהיר וברור.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-elevate transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 leading-relaxed">
                      בפתיר תמצאו ממשק נוח, הנחיות ברורות ושפה פשוטה. כל אחד יכול להבין, לפעול ולקבל מענה מקצועי.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-elevate transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 leading-relaxed">
                      אנחנו כאן כדי להנגיש את המערכת המשפטית – בקלות, במהירות ובשקיפות מלאה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
