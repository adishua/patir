import { FileText, MessageSquare, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    icon: MessageSquare,
    title: "1. בחירת שירות ומילוי פרטים",
    description: "בוחרים את השירות הדרוש וממלאים טופס פרטים אישיים"
  },
  {
    icon: FileText,
    title: "2. קבלת חוות דעת והצעת מחיר",
    description: "מקבלים חוות דעת מקצועית וכן הצעת מחיר סופית לקבלת השירות"
  },
  {
    icon: ShieldCheck,
    title: "3. הסכם למתן שירות",
    description: "מנסחים את ההסכמות ומתחילים בטיפול"
  }
];

function StepCard({ step }: { step: typeof steps[0] }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal relative bg-white pt-8 pb-6 px-6 text-center ${isInView ? 'in-view' : ''}`}
    >
      <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
        <step.icon className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-gray-500 leading-relaxed">{step.description}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">איך זה עובד?</h2>
          <p className="text-gray-600 text-lg">תהליך פשוט, שקוף ומהיר בדרך לפתרון הבעיה המשפטית שלך</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2" />

          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
