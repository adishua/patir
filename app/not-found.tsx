import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">הדף לא נמצא</h2>
        <p className="text-xl text-gray-600 mb-8">
          מצטערים, הדף שחיפשת אינו קיים או שהועבר למיקום אחר.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Home className="ml-2 h-5 w-5" />
              חזרה לעמוד הבית
            </Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline">
              צור קשר
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
