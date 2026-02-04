import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת נגישות של פתיר - מחויבות להנגשת האתר לכלל האוכלוסייה',
}

export default function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="reveal-up">
            <h1 className="text-4xl font-bold mb-8 text-primary">הצהרת נגישות</h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-6 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">מבוא</h2>
                <p>
                  אנו ב"פתיר" רואים חשיבות עליונה בהנגשת האתר לכלל האוכלוסייה, ובכלל זה לאנשים עם מוגבלות.
                  אנו משקיעים משאבים רבים כדי להבטיח שהאתר יהיה ידידותי ונוח לשימוש, מתוך אמונה כי לכל אדם
                  מגיעה הזכות לחיות בשוויון, כבוד, נוחות ועצמאות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">סטטוס נגישות</h2>
                <p>
                  האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
                  התשע"ג-2013, ועומד בדרישות תקן WCAG 2.1 ברמה AA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">התאמות שבוצעו באתר</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>תמיכה בטכנולוגיות מסייעות כגון קוראי מסך.</li>
                  <li>אפשרות לניווט מלא באמצעות המקלדת (Tab, Enter, חצים).</li>
                  <li>יחס ניגודיות תקין בין צבע הטקסט לצבע הרקע.</li>
                  <li>שימוש בטקסט חלופי (Alt text) לתמונות.</li>
                  <li>מבנה היררכי תקין של כותרות ורכיבי עמוד.</li>
                  <li>הגדלת גופן ללא פגיעה במבנה האתר.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">סייגים לנגישות</h2>
                <p>
                  למרות מאמצנו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים או יכולות שלא הונגשו כראוי או
                  שטרם הונגשו. אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור
                  כלל האוכלוסייה.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">פרטי רכז נגישות</h2>
                <p>בכל שאלה, הצעה לשיפור או תקלה בנושא נגישות, ניתן לפנות לרכז הנגישות שלנו:</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <strong>שם:</strong> צוות פתיר
                  </li>
                  <li>
                    <strong>טלפון:</strong> 054-7337115
                  </li>
                  <li>
                    <strong>דוא"ל:</strong> info@patir.net
                  </li>
                </ul>
              </section>

              <p className="text-sm text-gray-500 mt-12">
                תאריך עדכון ההצהרה: {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
