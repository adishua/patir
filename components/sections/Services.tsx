'use client'


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
import { useInView } from "@/hooks/use-in-view";

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
          {services?.map((service) => {
            const Icon = iconMap[service.icon] || Gavel;

            return (
              <ServiceCard
                key={service.title}
                service={service}
                Icon={Icon}
                onSelectService={onSelectService}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon, onSelectService }: { service: any; Icon: any; onSelectService?: (title: string) => void }) {
  const { ref, isInView } = useInView();

  const handleClick = () => {
    onSelectService?.(service.title);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`reveal group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col cursor-pointer ${isInView ? 'in-view' : ''}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {service.title}
        </h3>
      </div>
      <div className="space-y-3 mb-6 flex-grow">
        <p className="text-sm font-semibold text-secondary leading-relaxed">
          {service.longDescription}
        </p>
        <p className="text-gray-500 leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
      <div className="flex justify-end">
        <span className="p-0 h-auto font-semibold text-secondary group-hover:text-primary transition-colors group-hover:-translate-x-1 duration-300 flex items-center">
          המשך <ArrowLeft className="w-4 h-4 mr-2" />
        </span>
      </div>
    </div>
  );
}

export default Services;
