
import { 
  Home, 
  Info, 
  AlertTriangle, 
  Search, 
  Lightbulb, 
  MessageCircle, 
  Newspaper, 
  Phone 
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Beranda",
    url: "/",
    icon: Home,
  },
  {
    title: "Tentang",
    url: "/about",
    icon: Info,
  },
  {
    title: "Dampak",
    url: "/impact",
    icon: AlertTriangle,
  },
  {
    title: "Faktor Penyebab",
    url: "/causes",
    icon: Search,
  },
  {
    title: "Solusi & Pencegahan",
    url: "/solutions",
    icon: Lightbulb,
  },
  {
    title: "Konseling",
    url: "/counseling",
    icon: MessageCircle,
  },
  {
    title: "Artikel & Berita",
    url: "/articles",
    icon: Newspaper,
  },
  {
    title: "Kontak",
    url: "/contact",
    icon: Phone,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="text-lg font-semibold text-primary">
          Edukasi Remaja
        </div>
        <div className="text-sm text-muted-foreground">
          Pergaulan Sehat & Positif
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
            Menu Utama
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`w-full ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
                    >
                      <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
