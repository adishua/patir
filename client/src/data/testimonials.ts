export interface Testimonial {
  id: number;
  name: string;
  role: string | null;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "דני כ.",
    role: "לקוח מרוצה",
    content: "השירות היה מהיר ומקצועי. הצוות ב'פתיר' עזר לי לסגור את התיק ללא עיכובים מיותרים.",
    rating: 5,
  },
  {
    id: 2,
    name: "שרה ל.",
    role: "לקוחה",
    content: "יחס אישי ומענה מהיר לכל שאלה. ממליצה בחום לכל מי שזקוק לייעוץ משפטי דחוף.",
    rating: 5,
  },
  {
    id: 3,
    name: "יוסי מ.",
    role: "בעל עסק",
    content: "עזרו לי עם מכתב התראה שהביא לפתרון הבעיה עוד לפני שהגענו לבית המשפט. תודה רבה!",
    rating: 5,
  },
];
