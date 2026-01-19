import { db } from "./db";
import {
  inquiries, services, testimonials,
  type Inquiry, type InsertInquiry,
  type Service, type Testimonial
} from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getServices(): Promise<Service[]>;
  getTestimonials(): Promise<Testimonial[]>;
  seedServices(): Promise<void>;
  seedTestimonials(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async seedServices(): Promise<void> {
    const existing = await this.getServices();
    if (existing.length === 0) {
      await db.insert(services).values([
        {
          title: "סגירת תיק פלילי",
          description: "ייצוג משפטי מקצועי לסגירת תיקים פליליים ומחיקת רישום משטרתי.",
          icon: "ShieldX", // Lucide icon
        },
        {
          title: "מכתב התראה",
          description: "ניסוח ושליחת מכתבי התראה לפני נקיטת הליכים משפטיים.",
          icon: "MailWarning",
        },
        {
          title: "ערעור על סגירת תיק",
          description: "הגשת עררים על החלטות משטרה ופרקליטות לסגירת תיקים.",
          icon: "FileSignature",
        },
        {
          title: "קובלנה פלילית פרטית",
          description: "ניהול הליכים פליליים פרטיים במקרים המתאימים.",
          icon: "Gavel",
        },
        {
          title: "בקשת חנינה",
          description: "הגשת בקשות חנינה לנשיא המדינה למחיקת רישום פלילי.",
          icon: "Scale",
        },
      ]);
    }
  }

  async seedTestimonials(): Promise<void> {
    const existing = await this.getTestimonials();
    if (existing.length === 0) {
      await db.insert(testimonials).values([
        {
          name: "דני כהן",
          role: "לקוח מרוצה",
          content: "השירות היה מהיר ומקצועי. הצוות ב'פתיר' עזר לי לסגור את התיק ללא עיכובים מיותרים.",
          rating: 5,
        },
        {
          name: "שרה לוי",
          role: "לקוחה",
          content: "יחס אישי ומענה מהיר לכל שאלה. ממליצה בחום לכל מי שזקוק לייעוץ משפטי דחוף.",
          rating: 5,
        },
        {
          name: "יוסי מזרחי",
          role: "בעל עסק",
          content: "עזרו לי עם מכתב התראה שהביא לפתרון הבעיה עוד לפני שהגענו לבית המשפט. תודה רבה!",
          rating: 5,
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
