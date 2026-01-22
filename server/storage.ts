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
          title: "בקשה לגניזת תיק",
          description: "סגירת תיק חקירה וליווי צמוד על מנת למנוע הגשת כתב אישום לבית משפט",
          longDescription: "נפתחה נגדך חקירה והתיק עדיין פתוח? אנו נבחן את המקרה ונגיש בקשה מתאימה לסגירת התיק.",
          icon: "ShieldX",
        },
        {
          title: "בקשת חנינה",
          description: "הגשת בקשת חנינה מתאימה לנשיא המדינה.",
          longDescription: "בניגוד למה שנהוג לחשוב, בקשת חנינה אינה רק למי שנגזר עליו עונש מאסר. ניתן לבקש חנינה אפילו בקשר לקנסות. בקשת חנינה מתאימה גם למי שנושא הרשעה פלילית, כאשר בנסיבות המתאימות ניתן לבקש קיצור תקופת התיישנות או מחיקה.",
          icon: "Scale",
        },
        {
          title: "הגשת קובלנה פלילית פרטית",
          description: "הליך ייחודי שבו אתה מגיש כתב אישום כנגד מי שביצע נגדך עבירה פלילית",
          longDescription: "רבים לא יודעים, אך ישנם מקרים שבהם אזרח יכול להגיש כתב אישום בגין עבירות פליליות שבוצעו כלפיו. אנו נבחן את המקרה ונייצג אותך בהליך.",
          icon: "Gavel",
        },
        {
          title: "טיפול בקבלת מכתב התראה",
          description: "קיבלת מכתב התראה? תוכל להשיב לו באופן מקצועי באמצעותנו",
          longDescription: "קיבלת מכתב התראה מעורך דין בו הוא מאיים שאם לא תשלם כסף ללקוח שלו, תוגש נגדך תביעה כספית משמעותית? פעמים רבות מדובר באיום סרק. אנו נשיב למכתב באופן מקצועי.",
          icon: "MailWarning",
        },
        {
          title: "כתב אישום",
          description: "ייצוג מקצועי בהליך פלילי",
          longDescription: "קיבלת כתב אישום? המדינה טוענת שביצעת עבירה? אתה זקוק לייצוג מקצועי. אנחנו נעמוד לצדך ונעמיד עבורך את הטיעונים הטובים ביותר מול התביעה.",
          icon: "FileSignature",
        },
        {
          title: "ערר על סגירת תיק",
          description: "התלוננת במשטרה והתיק נסגר? תוכל להגיש בקשה על מנת לפתוח את התיק מחדש",
          longDescription: "אין דבר מתסכל יותר מאשר תלונה מוצדקת שהגשת למשטרה, והיא סוגרת את התיק. יש דרך לשכנע את המשטרה לפתוח את התיק ולמצות את הדין.",
          icon: "FileSignature",
        },
      ]);
    }
  }

  async seedTestimonials(): Promise<void> {
    const existing = await this.getTestimonials();
    if (existing.length === 0) {
      await db.insert(testimonials).values([
        {
          name: "דני כ.",
          role: "לקוח מרוצה",
          content: "השירות היה מהיר ומקצועי. הצוות ב'פתיר' עזר לי לסגור את התיק ללא עיכובים מיותרים.",
          rating: 5,
        },
        {
          name: "שרה ל.",
          role: "לקוחה",
          content: "יחס אישי ומענה מהיר לכל שאלה. ממליצה בחום לכל מי שזקוק לייעוץ משפטי דחוף.",
          rating: 5,
        },
        {
          name: "יוסי מ.",
          role: "בעל עסק",
          content: "עזרו לי עם מכתב התראה שהביא לפתרון הבעיה עוד לפני שהגענו לבית המשפט. תודה רבה!",
          rating: 5,
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
