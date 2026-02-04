import type { Metadata } from 'next'
import { assistant } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://patir.net'),
  title: {
    default: 'פתיר - הדרך המהירה לסגירת התיק שלך',
    template: '%s | פתיר',
  },
  description: 'פתרון משפטי מהיר, מקצועי ודיסקרטי. טיפול בבקשות לסגירת תיקים, מחיקת רישום ושינוי עילת סגירה.',
  keywords: ['עורך דין', 'סגירת תיק', 'בקשת חנינה', 'קובלנה פלילית', 'משפט פלילי', 'ייצוג משפטי'],
  authors: [{ name: 'Patir Law Office' }],
  creator: 'Patir Law Office',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://patir.net',
    siteName: 'פתיר',
    title: 'פתיר - הדרך המהירה לסגירת התיק שלך',
    description: 'פתרון משפטי מהיר, מקצועי ודיסקרטי. טיפול בבקשות לסגירת תיקים, מחיקת רישום ושינוי עילת סגירה.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'פתיר - משרד עורכי דין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'פתיר - הדרך המהירה לסגירת התיק שלך',
    description: 'פתרון משפטי מהיר, מקצועי ודיסקרטי. טיפול בבקשות לסגירת תיקים, מחיקת רישום ושינוי עילת סגירה.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'פתיר - משרד עורכי דין',
  alternateName: 'Patir Law Office',
  url: 'https://patir.net',
  logo: 'https://patir.net/favicon.png',
  image: 'https://patir.net/og-image.png',
  description: 'פתרון משפטי מהיר, מקצועי ודיסקרטי. טיפול בבקשות לגניזת תיקים, בקשות חנינה, קובלנות פליליות, מכתבי התראה, כתבי אישום וערר על סגירת תיק.',
  telephone: '+972-54-733-7115',
  email: 'info@patir.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ראול וולנברג 6',
    addressLocality: 'תל אביב',
    postalCode: '6971905',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '32.1084',
    longitude: '34.8384',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Israel',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [],
  serviceType: ['בקשה לגניזת תיק', 'בקשת חנינה', 'הגשת קובלנה פלילית פרטית', 'טיפול בקבלת מכתב התראה', 'כתב אישום', 'ערר על סגירת תיק'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={assistant.className}>{children}</body>
    </html>
  )
}
