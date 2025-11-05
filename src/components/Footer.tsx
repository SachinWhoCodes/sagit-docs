import { Link } from "react-router-dom";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-panel mt-auto">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Documentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/getting-started" className="hover:text-foreground transition-colors">Getting Started</Link></li>
              <li><Link to="/user-guide" className="hover:text-foreground transition-colors">User Guide</Link></li>
              <li><Link to="/architecture" className="hover:text-foreground transition-colors">Architecture</Link></li>
              <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/development" className="hover:text-foreground transition-colors">Development</Link></li>
              <li><Link to="/roadmap" className="hover:text-foreground transition-colors">Roadmap</Link></li>
              <li><a href="https://github.com/sagit-tool/sagit" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://github.com/sagit-tool/sagit/blob/main/LICENSE" className="hover:text-foreground transition-colors">License</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/team" className="hover:text-foreground transition-colors">Team</Link></li>
              <li><a href="https://github.com/sagit-tool/sagit/issues" className="hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="https://github.com/sagit-tool/sagit/discussions" className="hover:text-foreground transition-colors">Discussions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Source Code Analysis and Git Indexing Tool
            </p>
            <a
              href="https://github.com/sagit-tool/sagit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand2 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Sagit Team. Version 1.0-SNAPSHOT
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with ❤️ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
