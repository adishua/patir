import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'השירותים שלנו',
  description: 'מגוון שירותים משפטיים מקצועיים ומהירים - סגירת תיקים, בקשות חנינה, קובלנות פליליות ועוד',
}

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">השירותים שלנו</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              אנו מציעים מגוון רחב של שירותים משפטיים מותאמים לצרכים שלך. לחץ על כל שירות למידע מפורט.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const slug = generateSlug(service.title)

              return (
                <Link key={index} href={`/services/${slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-[-4px] transition-transform">
                        קרא עוד
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">לא מצאת את מה שחיפשת? נשמח לעזור!</p>
            <Link
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
