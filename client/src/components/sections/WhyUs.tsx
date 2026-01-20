import { Users, Monitor, Layout, Globe } from "lucide-react";
import abstractLegal from "@assets/generated_images/minimalist_legal_background_pattern_illustration.png";

const benefits = [
  {
    icon: Users,
    title: "ליווי על ידי מומחים",
    description: "כל השירותים מנוהלים על ידי עורכי דין מנוסים, בתהליך דיגיטלי מלא."
  },
  {
    icon: Globe,
    title: "מענה ממוקד וברור",
    description: "השירותים שלנו מתאימים לכל מי שזקוק לפתרון ממוקד, מהיר וברור."
  },
  {
    icon: Layout,
    title: "ממשק נוח ופשוט",
    description: "בפתיר תמצאו ממשק נוח, הנחיות ברורות ושפה פשוטה. כל אחד יכול להבין, לפעול ולקבל מענה מקצועי."
  },
  {
    icon: Monitor,
    title: "הנגשת המערכת המשפטית",
    description: "אנחנו כאן כדי להנגיש את המערכת המשפטית – בקלות, במהירות ובשקיפות מלאה."
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
        <img
          src={abstractLegal}
          alt=""
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">למה לבחור בפתיר?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            העולם המשפטי יכול להיות מורכב, איטי ובירוקרטי. אנחנו כאן כדי לשנות את זה.
            בנינו פלטפורמה שמאפשרת לך לקבל את השירות המשפטי הטוב ביותר, בזמן הקצר ביותר.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
