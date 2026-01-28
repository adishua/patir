import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background" dir="rtl">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="reveal-up">
            <h1 className="text-4xl font-bold mb-8 text-primary">תנאי שימוש</h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-6 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">הסכמה לתנאים</h2>
                <p>
                  השימוש באתר זה מהווה הסכמה לתנאי השימוש המפורטים להלן.
                  אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">אודות השירות</h2>
                <p>
                  אתר "פתיר" מספק מידע כללי על שירותים משפטיים ומאפשר יצירת קשר לקבלת ייעוץ.
                  המידע באתר אינו מהווה ייעוץ משפטי ואינו מחליף התייעצות עם עורך דין.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">קניין רוחני</h2>
                <p>
                  כל התכנים באתר, לרבות טקסטים, עיצוב, לוגו, תמונות וגרפיקה, הם קניינה הבלעדי של "פתיר"
                  ומוגנים על ידי חוקי זכויות יוצרים. אין להעתיק, לשכפל או להפיץ תכנים מהאתר ללא אישור מראש ובכתב.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">הגבלת אחריות</h2>
                <p>
                  המידע באתר מסופק "כמות שהוא" (AS IS). אנו עושים מאמצים לשמור על דיוק המידע,
                  אך איננו מתחייבים לשלמותו או לעדכניותו. השימוש במידע הוא על אחריות המשתמש בלבד.
                </p>
                <p className="mt-4">
                  לא נישא באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה מהשימוש באתר או מהסתמכות על המידע המופיע בו.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">קישורים לאתרים חיצוניים</h2>
                <p>
                  האתר עשוי להכיל קישורים לאתרים חיצוניים. איננו אחראים לתוכן, למדיניות הפרטיות
                  או לפרקטיקות של אתרים אלה.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">שינויים בתנאי השימוש</h2>
                <p>
                  אנו שומרים לעצמנו את הזכות לעדכן או לשנות תנאים אלה בכל עת.
                  שינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">דין חל וסמכות שיפוט</h2>
                <p>
                  על תנאי שימוש אלה יחולו דיני מדינת ישראל בלבד.
                  סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאים אלה תהיה לבתי המשפט המוסמכים בתל אביב-יפו.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">יצירת קשר</h2>
                <p>לכל שאלה בנוגע לתנאי השימוש, ניתן לפנות אלינו:</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>טלפון:</strong> 054-7337115</li>
                  <li><strong>דוא"ל:</strong> info@patir.net</li>
                </ul>
              </section>

              <p className="text-sm text-gray-500 mt-12">
                תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
