import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DocsSidebar } from "./DocsSidebar"
import { ThemeToggle } from "./ThemeToggle"
import { ReactNode } from "react"

interface DocsLayoutProps {
  children: ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DocsSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex items-center h-full px-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1" />
              <ThemeToggle />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}