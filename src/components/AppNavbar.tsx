
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Info, AlertTriangle, Search, Lightbulb, MessageCircle, Newspaper, Phone, Brain } from "lucide-react";

const menuItems = [
  { title: "Beranda", url: "/", icon: Home },
  { title: "Tentang", url: "/about", icon: Info },
  { title: "Dampak", url: "/impact", icon: AlertTriangle },
  { title: "Faktor Penyebab", url: "/causes", icon: Search },
  { title: "Solusi & Pencegahan", url: "/solutions", icon: Lightbulb },
  { title: "Konseling", url: "/counseling", icon: MessageCircle },
  { title: "Artikel & Berita", url: "/articles", icon: Newspaper },
  { title: "Kontak", url: "/contact", icon: Phone },
  { title: "Tes Psikologi", url: "/quiz", icon: Brain },
];

export function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">Edukasi Remaja</div>
            <div className="hidden sm:block text-sm text-muted-foreground">
              Pergaulan Sehat & Positif
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <Button
                  key={item.title}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                >
                  <Link to={item.url} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span className="hidden lg:inline">{item.title}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-3 mt-6">
                <div className="text-lg font-semibold text-primary mb-4">
                  Edukasi Remaja
                </div>
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <Button
                      key={item.title}
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
