import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiry";
import { useServices } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { useEffect } from "react";

export function Contact({ selectedServiceId }: { selectedServiceId?: number }) {
  const mutation = useCreateInquiry();
  const { data: services } = useServices();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema.extend({
      email: z.string().email("כתובת אימייל לא תקינה").optional().or(z.literal("")),
      message: z.string().min(1, "הודעה היא שדה חובה"),
      serviceId: z.coerce.number().optional().nullable(),
    })),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceId: null,
      message: "",
    },
  });

  useEffect(() => {
    if (selectedServiceId) {
      form.setValue("serviceId", selectedServiceId);
    }
  }, [selectedServiceId, form]);

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <section id="contact" className="py-24 bg-[#1F3C88] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">בדיקת זכאות חינם</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              אל תחכה שהבעיה תיעלם מעצמה. השאר פרטים עכשיו ועורך דין מומחה יחזור אליך לבחינת המקרה - ללא עלות וללא התחייבות.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">משאירים פרטים</h4>
                  <p className="text-blue-200 text-sm">ממלאים את הטופס הקצר בתוך דקה</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">מקבלים שיחה</h4>
                  <p className="text-blue-200 text-sm">עורך דין חוזר אליך לשיחת ייעוץ ראשונית</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">יוצאים לדרך</h4>
                  <p className="text-blue-200 text-sm">מתחילים בטיפול בתיק עד לסגירתו</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white rounded-3xl shadow-2xl border-none">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">השאר פרטים לחזרה</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>שם מלא</FormLabel>
                        <FormControl>
                          <Input placeholder="ישראל ישראלי" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>טלפון נייד</FormLabel>
                          <FormControl>
                            <Input placeholder="050-0000000" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>אימייל (אופציונלי)</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>השירות המבוקש</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value?.toString() || ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                              <SelectValue placeholder="בחר שירות..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services?.map((service) => (
                              <SelectItem key={service.id} value={service.id.toString()}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>הודעה</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="תאר בקצרה את המקרה..." 
                            className="min-h-[100px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20 rounded-xl mt-4"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                        שולח...
                      </>
                    ) : (
                      <>
                        שלח פנייה
                        <Send className="w-5 h-5 mr-2" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    בלחיצה על "שלח פנייה" אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
