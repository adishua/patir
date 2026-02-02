import barakImage from "@assets/barak.jpeg";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">

          {/* Main Description Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">קצת עלינו</h2>

            <div className="space-y-1 text-gray-700 leading-snug text-lg">
              <p>
                פתיר הוקמה כדי לשים סוף לחוסר הוודאות, לסיבוכים ולזמן האבוד שמלווים תיקים משפטיים פשוטים יחסית. במקום להיתקע בין מוקדים, טפסים ומכתבים – אצלנו זה קורה ב־3 צעדים פשוטים. והכול אונליין.
              </p>
              <p>
                כל תהליך בפתיר מותאם למי שזקוק לפתרון מיידי, גם במצבי לחץ או חוסר ידע משפטי. אנו מתחייבים למקצועיות, שקיפות וזמינות.
              </p>
              <p>
                המערכת שלנו פשוטה וברורה – מהפנייה ועד סיום הטיפול. כל שלב מוסבר בשפה נגישה, עם ליווי צמוד של עורך דין.
              </p>
              <p>
                הצוות שלנו זמין כמעט בכל שעה, כולל סופי שבוע, ומטפל בכל הבירוקרטיה עבורך.
              </p>
              <p>
                כל השירותים מנוהלים על ידי עורכי דין מנוסים, בתהליך דיגיטלי מלא.
              </p>
              <p>
                השירותים שלנו מתאימים לכל מי שזקוק לפתרון ממוקד, מהיר וברור.
              </p>
              <p>
                בפתיר תמצאו ממשק נוח, הנחיות ברורות ושפה פשוטה. כל אחד יכול להבין, לפעול ולקבל מענה מקצועי.
              </p>
              <p>
                אנחנו כאן כדי להנגיש את המערכת המשפטית – בקלות, במהירות ובשקיפות מלאה.
              </p>
            </div>
          </div>

          {/* Lawyer Bio Section with Side Photo */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Side Photo */}
            <div className="relative md:w-72 flex-shrink-0">
              <div className="h-full rounded-xl overflow-hidden bg-gray-100 shadow-md">
                <img
                  src={barakImage}
                  alt="עו״ד ברק כהן"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg shadow-lg border border-gray-100">
                <p className="text-xs font-semibold text-gray-500">מייסד המשרד</p>
                <p className="text-sm font-bold text-primary">עו״ד ברק כהן</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">עו״ד ברק כהן</h3>
              <div className="space-y-2 text-gray-700 leading-snug italic">
                <p>
                  עו״ד ברק כהן הוא אחד המשפטנים המנוסים והידועים בארץ בתחום המשפט הפלילי, עם ניסיון של למעלה מ־15 שנה בטיפול אישי במאות תיקים פליליים – קטנים וגדולים.
                </p>
                <p>
                  את הידע, הניסיון והעקרונות שמנחים אותו מזה שנים — הוא מביא עכשיו אל תוך המהפכה הדיגיטלית של תחום המשפט בישראל.
                </p>
                <p>
                  ברק הוא המייסד והמוביל המשפטי של פתיר, שירות המאפשר טיפול משפטי איכותי וממוקד – אונליין, במהירות וללא ביורוקרטיה.
                </p>
                <blockquote className="border-r-4 border-secondary pr-4 mt-4 text-primary font-medium">
                  "פתיר נולד מתוך צורך אמיתי – לפשט את הדרך, לקצר תהליכים, ולאפשר לכל אדם גישה אמיתית לצדק. בלי מוקדים, בלי עיכובים, בלי בירוקרטיה."
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
