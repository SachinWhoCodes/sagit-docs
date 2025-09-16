import { NavLink, useLocation } from "react-router-dom"
import { 
  Home, 
  Rocket, 
  BookOpen, 
  Building, 
  Star, 
  Code2, 
  MapPin, 
  GitBranch, 
  Clock,
  Search,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { 
    title: "Getting Started", 
    url: "/getting-started", 
    icon: Rocket,
    items: [
      { title: "Installation", url: "/getting-started/installation" },
      { title: "Quick Setup", url: "/getting-started/quick-setup" },
    ]
  },
  { 
    title: "User Guide", 
    url: "/user-guide", 
    icon: BookOpen,
    items: [
      { title: "CLI Commands", url: "/user-guide/cli-commands" },
      { title: "Git Compatibility", url: "/user-guide/git-compatibility" },
    ]
  },
  { title: "Architecture", url: "/architecture", icon: Building },
  { title: "Features", url: "/features", icon: Star },
  { 
    title: "Development", 
    url: "/development", 
    icon: Code2,
    items: [
      { title: "Tech Stack", url: "/development/tech-stack" },
      { title: "Build & Deploy", url: "/development/build-deploy" },
      { title: "Current Status", url: "/development/current-status" },
    ]
  },
  { title: "Roadmap", url: "/roadmap", icon: MapPin },
  { title: "Related Work", url: "/related-work", icon: GitBranch },
  { title: "Future Work", url: "/future-work", icon: Clock },
]

export function DocsSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path
  const isParentActive = (items?: { url: string }[]) => 
    items?.some(item => location.pathname === item.url)

  const getNavClassName = (path: string, hasChildren?: boolean) => {
    const baseClasses = "w-full justify-start transition-smooth"
    const active = isActive(path) || (hasChildren && isParentActive(navigationItems.find(item => item.url === path)?.items))
    
    return active 
      ? `${baseClasses} bg-sidebar-accent text-sidebar-accent-foreground font-medium`
      : `${baseClasses} hover:bg-sidebar-accent/50 text-sidebar-foreground`
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-background"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        className={`
          ${collapsed ? "w-16" : "w-72"} 
          transition-all duration-300 
          border-r border-sidebar-border
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          fixed top-0 left-0 h-screen z-50 lg:sticky lg:top-0 lg:left-0 lg:h-[100dvh] lg:z-40
        `}
        collapsible="offcanvas"
      >
        <SidebarContent className="bg-sidebar">
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            {!collapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-sidebar-foreground">Sagit</h2>
                  <p className="text-xs text-sidebar-foreground/60">Documentation</p>
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          {!collapsed && (
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-sidebar-accent/50"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(item.url, !!item.items)}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                    {/* Sub-items */}
                    {!collapsed && item.items && (isActive(item.url) || isParentActive(item.items)) && (
                      <div className="ml-7 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <SidebarMenuButton key={subItem.title} asChild size="sm">
                            <NavLink 
                              to={subItem.url}
                              className={getNavClassName(subItem.url)}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-sm">{subItem.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Footer */}
          {!collapsed && (
            <div className="mt-auto p-4 border-t border-sidebar-border">
              <div className="text-xs text-sidebar-foreground/60">
                <p>Version 1.0-SNAPSHOT</p>
                <p className="mt-1">Built with ❤️ for developers</p>
              </div>
            </div>
          )}
        </SidebarContent>
      </Sidebar>
    </>
  )
}