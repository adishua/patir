import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import {
  FolderArchive,
  HeartHandshake,
  FilePlus,
  MailWarning,
  FileText,
  RotateCcw,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  FolderArchive,
  HeartHandshake,
  FilePlus,
  MailWarning,
  FileText,
  RotateCcw,
}

// Generate slugs from service titles
function generateSlug(title: string): string {
  return title
    .replace(/[״"]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

// Generate all possible slugs for static generation
export function generateStaticParams() {
  return services.map((service) => ({
    slug: generateSlug(service.title),
  }))
}

// Generate metadata for each service page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => generateSlug(s.title) === params.slug)

  if (!service) {
    return {
      title: 'שירות לא נמצא',
    }
  }

  return {
    title: service.title,
    description: service.longDescription || service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => generateSlug(s.title) === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center text-primary mb-6">
              {Icon && <Icon className="w-10 h-10" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{service.title}</h1>
            <p className="text-xl text-gray-700 leading-relaxed">{service.description}</p>
          </div>

          {/* Long Description */}
          {service.longDescription && (
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-muted p-8 rounded-2xl">
                <p className="text-gray-700 leading-relaxed text-lg">{service.longDescription}</p>
              </div>
            </div>
          )}

          {/* Process Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary">איך זה עובד?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">צור קשר</h3>
                  <p className="text-gray-600">
                    פנה אלינו דרך טופס יצירת הקשר או בטלפון, ותאר את המקרה שלך בקצרה.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ייעוץ ראשוני</h3>
                  <p className="text-gray-600">
                    נקיים שיחת ייעוץ ראשונית, נבחן את המקרה ונציע תוכנית טיפול מתאימה.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">טיפול מקצועי</h3>
                  <p className="text-gray-600">
                    עורך הדין שלנו יטפל בתיק באופן מקצועי ומהיר, תוך עדכון שוטף.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">השגת תוצאות</h3>
                  <p className="text-gray-600">נעבוד בשקידה להשגת התוצאה הטובה ביותר עבורך.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">מוכן להתחיל?</h2>
            <p className="text-xl mb-8 text-blue-100">נשמח לעזור לך לפתור את הבעיה המשפטית שלך</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-bold rounded-full"
                >
                  צור קשר עכשיו
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-full"
                >
                  חזרה לכל השירותים
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
