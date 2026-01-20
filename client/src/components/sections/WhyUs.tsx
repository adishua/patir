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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">למה לבחור בפתיר?</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              העולם המשפטי יכול להיות מורכב, איטי ובירוקרטי. אנחנו כאן כדי לשנות את זה.
              בנינו פלטפורמה שמאפשרת לך לקבל את השירות המשפטי הטוב ביותר, בזמן הקצר ביותר.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3" />
            {/* busy lawyer working desk */}
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              alt="Professional Service"
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3] transform -rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
