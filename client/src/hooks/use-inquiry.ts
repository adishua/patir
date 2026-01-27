import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { config } from "@/data/config";

export interface InquiryData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
  company?: string;
}

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (data.company) {
        return { success: true };
      }

      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service || "",
        message: data.message,
      };

      const res = await fetch(config.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נציג מטעמנו יחזור אליך בהקדם.",
        variant: "default",
        className: "bg-green-50 border-green-200 text-green-900",
      });
    },
    onError: (error) => {
      toast({
        title: "שגיאה בשליחת הפנייה",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
