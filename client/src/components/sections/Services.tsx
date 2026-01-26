import { useServices } from "@/hooks/use-content";
import {
  Loader2,
  ArrowLeft,
  FolderArchive,
  HeartHandshake,
  FilePlus,
  MailWarning,
  FileText,
  RotateCcw,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

// Map icon strings from DB to Lucide components
const iconMap: Record<string, any> = {
  FolderArchive,
  HeartHandshake,
  FilePlus,
  Gavel,
  MailWarning,
  FileText,
  RotateCcw,
};

export function Services({
  onSelectService,
}: {
  onValueChange?: (title: string) => void;
  onSelectService?: (title: string) => void;
}) {
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
          <p className="text-gray-600 text-lg">
            מעטפת משפטית מלאה להסרת רישומים וסגירת תיקים
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const Icon = iconMap[service.icon] || Gavel;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-secondary leading-relaxed">
                    {service.longDescription}
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => onSelectService?.(service.title)}
                >
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-secondary hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
                  >
                    לבחירה <ArrowLeft className="w-4 h-4 mr-2" />
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
