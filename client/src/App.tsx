import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";

// Lazy load non-critical pages for better initial load performance
const Accessibility = lazy(() => import("@/pages/Accessibility"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Check for hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready after route change
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="text-primary">טוען...</div>
    </div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div dir="rtl">
        <ScrollToTop />
        <Router />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
