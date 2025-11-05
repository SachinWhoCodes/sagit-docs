import { NavLink } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, BookOpen, Terminal, Layers, Zap, 
  Code, Map, Users, Link as LinkIcon, Lightbulb,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Getting Started", href: "/getting-started", icon: BookOpen },
  {
    title: "User Guide",
    href: "/user-guide",
    icon: Terminal,
    children: [
      { title: "Commands Overview", href: "/user-guide#commands" },
      { title: "setup", href: "/user-guide#setup" },
      { title: "diff", href: "/user-guide#diff" },
      { title: "describe", href: "/user-guide#describe" },
      { title: "impacted", href: "/user-guide#impacted" },
      { title: "meta", href: "/user-guide#meta" },
      { title: "verify", href: "/user-guide#verify" },
    ],
  },
  { title: "Architecture", href: "/architecture", icon: Layers },
  { title: "Features", href: "/features", icon: Zap },
  { title: "Development", href: "/development", icon: Code },
  { title: "Roadmap", href: "/roadmap", icon: Map },
  { title: "Team", href: "/team", icon: Users },
  { title: "Related Work", href: "/related-work", icon: LinkIcon },
  { title: "Future Work", href: "/future-work", icon: Lightbulb },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["User Guide"]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)]
          w-64 border-r border-sidebar-border bg-sidebar-bg
          transition-transform duration-300 lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ScrollArea className="h-full px-4 py-6">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.title)}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span className="flex-1 text-left">{item.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(item.title) ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {expandedSections.includes(item.title) && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            onClick={onClose}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                              }`
                            }
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`
                    }
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
