import { useServices } from "@/hooks/use-content";
import { Loader2, ArrowLeft, Gavel, FileSignature, Scale, Eraser, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

// Map icon strings from DB to Lucide components
const iconMap: Record<string, any> = {
  Gavel,
  FileSignature,
  Scale,
  Eraser,
  AlertTriangle
};

export function Services() {
  const { data: services, isLoading } = useServices();

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 text-lg">מעטפת משפטית מלאה להסרת רישומים וסגירת תיקים</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const Icon = iconMap[service.icon] || Gavel;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm font-semibold text-secondary mb-3 leading-relaxed">
                  {service.longDescription || service.description}
                </p>
                <p className="text-gray-500 mb-6 leading-relaxed min-h-[3rem]">
                  {service.description}
                </p>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                  <Button variant="link" className="p-0 h-auto font-semibold text-secondary hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                    למידע נוסף <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </ScrollLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
