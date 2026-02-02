import { useForm } from "react-hook-form";
import { useCreateInquiry, type InquiryData } from "@/hooks/use-inquiry";
import { useServices } from "@/hooks/use-content";
import { ServiceTitle } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export function Contact({ selectedService }: { selectedService?: string }) {
  const mutation = useCreateInquiry();
  const { data: services } = useServices();

  const form = useForm<InquiryData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      company: "",
    },
  });

  useEffect(() => {
    if (selectedService) {
      form.setValue("service", selectedService);
    } else {
      form.setValue("service", "");
    }
  }, [selectedService, form]);

  function onSubmit(data: InquiryData) {
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="text-white">
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              אל תחכה שהבעיה תיעלם מעצמה. השאר פרטים עכשיו ועורך דין מומחה יחזור אליך לבחינת המקרה - ללא עלות וללא התחייבות.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-white">משאירים פרטים</h3>
                  <p className="text-blue-200 text-sm">ממלאים את הטופס הקצר בתוך דקה</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-white">מקבלים שיחה</h3>
                  <p className="text-blue-200 text-sm">עורך דין חוזר אליך לשיחת ייעוץ ראשונית</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-white">יוצאים לדרך</h3>
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
                    rules={{ required: "שם מלא הוא שדה חובה" }}
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
                      rules={{ required: "טלפון נייד הוא שדה חובה" }}
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
                      rules={{
                        pattern: {
                          value: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "כתובת אימייל לא תקינה"
                        }
                      }}
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
                    name="service"
                    rules={{ required: "יש לבחור שירות" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>השירות המבוקש</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors text-right" dir="rtl">
                              <SelectValue placeholder="בחר שירות..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent dir="rtl">
                            <SelectItem value={ServiceTitle.OTHER}>{ServiceTitle.OTHER}</SelectItem>
                            {services?.map((service) => (
                              <SelectItem key={service.title} value={service.title}>
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
                    rules={{ required: "הודעה היא שדה חובה" }}
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

                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                    {...form.register("company")}
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
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

export default Contact;
