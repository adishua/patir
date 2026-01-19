import { useTestimonials } from "@/hooks/use-content";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const { data: testimonials, isLoading } = useTestimonials();

  if (isLoading || !testimonials?.length) return null;

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-gray-600 text-lg">אלפי לקוחות כבר יצאו לדרך חדשה בזכות פתיר</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-gray-200" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role || "לקוח"}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
