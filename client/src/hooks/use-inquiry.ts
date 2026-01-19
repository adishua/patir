import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
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
