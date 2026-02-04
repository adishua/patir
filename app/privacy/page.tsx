import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של פתיר - הגנה על המידע האישי שלך',
}

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="reveal-up">
            <h1 className="text-4xl font-bold mb-8 text-primary">מדיניות פרטיות</h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-6 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">כללי</h2>
                <p>
                  אנו ב"פתיר" מכבדים את פרטיותך ומחויבים להגן על המידע האישי שאתה משתף איתנו.
                  מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">איזה מידע אנו אוספים?</h2>
                <p>אנו אוספים את המידע הבא כאשר אתה פונה אלינו דרך טופס יצירת הקשר:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>שם מלא</li>
                  <li>מספר טלפון</li>
                  <li>כתובת דוא"ל (אופציונלי)</li>
                  <li>תוכן ההודעה שלך</li>
                  <li>השירות המבוקש</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">כיצד אנו משתמשים במידע?</h2>
                <p>המידע שנאסף משמש אותנו למטרות הבאות בלבד:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>יצירת קשר חוזר לצורך מתן ייעוץ ראשוני</li>
                  <li>הבנת הצרכים שלך ומתן שירות מותאם</li>
                  <li>שיפור השירותים שלנו</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">שיתוף מידע עם צדדים שלישיים</h2>
                <p>
                  אנו לא מוכרים, משכירים או משתפים את המידע האישי שלך עם צדדים שלישיים למטרות שיווקיות.
                  המידע שלך יישמר בסודיות מלאה ויועבר רק לעורכי הדין המטפלים בתיק שלך.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">אבטחת מידע</h2>
                <p>
                  אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע שלך מפני גישה בלתי מורשית,
                  שינוי, חשיפה או השמדה. התקשורת עם האתר מוצפנת באמצעות פרוטוקול HTTPS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">עוגיות וניתוח שימוש</h2>
                <p>
                  אתר זה משתמש בשירות Google Analytics לצורך ניתוח סטטיסטי של השימוש באתר.
                  שירות זה אוסף מידע אנונימי על דפוסי הגלישה באתר באמצעות עוגיות (Cookies).
                </p>
                <p className="mt-4">המידע הנאסף כולל:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>מספר מבקרים באתר</li>
                  <li>דפים נצפים</li>
                  <li>משך הביקור</li>
                  <li>מקור ההפניה לאתר</li>
                </ul>
                <p className="mt-4">
                  מידע זה משמש אותנו לשיפור האתר ואינו מזהה אותך באופן אישי.
                  תוכל לבטל את איסוף המידע באמצעות הגדרות הדפדפן שלך או התקנת{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    תוסף חסימת Google Analytics
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">שמירת מידע</h2>
                <p>
                  אנו שומרים את המידע שלך למשך הזמן הנדרש לצורך מתן השירות ובהתאם לדרישות החוק.
                  תוכל לבקש מחיקת המידע בכל עת על ידי פנייה אלינו.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">זכויותיך</h2>
                <p>על פי חוק הגנת הפרטיות, התשמ"א-1981, עומדות לך הזכויות הבאות:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>לעיין במידע שנאסף עליך</li>
                  <li>לבקש תיקון מידע שגוי</li>
                  <li>לבקש מחיקת המידע</li>
                  <li>להתנגד לשימוש במידע למטרות שיווקיות</li>
                </ul>
              </section>

              <section className="bg-blue-50 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">יצירת קשר</h2>
                <p>לכל שאלה או בקשה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <strong>טלפון:</strong> 054-7337115
                  </li>
                  <li>
                    <strong>דוא"ל:</strong> info@patir.net
                  </li>
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
  )
}
