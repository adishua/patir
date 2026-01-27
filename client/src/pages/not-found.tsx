import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background" dir="rtl">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">העמוד לא נמצא</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            מצטערים, העמוד שחיפשת אינו קיים או שהוסר.
          </p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">
              <Home className="w-4 h-4 ml-2" />
              חזרה לעמוד הבית
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
