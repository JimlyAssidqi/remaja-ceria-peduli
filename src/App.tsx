
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Causes from "./pages/Causes";
import Solutions from "./pages/Solutions";
import Counseling from "./pages/Counseling";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border p-4">
                <SidebarTrigger className="hover:bg-accent" />
              </div>
              <div className="p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/impact" element={<Impact />} />
                  <Route path="/causes" element={<Causes />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/counseling" element={<Counseling />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
