import { Menu, Search, Github, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-panel/95 backdrop-blur supports-[backdrop-filter]:bg-bg-panel/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <img src="/sagit_logo.png" alt="Sagit Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl">Sagit</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button> */}
          
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a href="https://github.com/SachinWhoCodes/sagit" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button asChild className="hidden sm:flex">
            <Link to="/getting-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
