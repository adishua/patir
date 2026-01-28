import { useState } from "react";
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
  const [isPending, setIsPending] = useState(false);

  const mutate = async (data: InquiryData, options?: { onSuccess?: () => void }) => {
    // Honeypot check
    if (data.company) {
      options?.onSuccess?.();
      return;
    }

    setIsPending(true);
    try {
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

      if (!res.ok) throw new Error("Failed to submit inquiry");

      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נציג מטעמנו יחזור אליך בהקדם.",
        variant: "default",
        className: "bg-green-50 border-green-200 text-green-900",
      });
      options?.onSuccess?.();
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הפנייה",
        description: error instanceof Error ? error.message : "אנא נסה שנית",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return { mutate, isPending };
}
