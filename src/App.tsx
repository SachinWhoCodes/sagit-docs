import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocsLayout } from "./components/DocsLayout";
import HomePage from "./pages/HomePage";
import GettingStarted from "./pages/GettingStarted";
import Architecture from "./pages/Architecture";
import Roadmap from "./pages/Roadmap";
import Development from "./pages/Development";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DocsLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/getting-started/*" element={<GettingStarted />} />
            <Route path="/user-guide" element={<div className="docs-prose"><h1>User Guide</h1><p>Comprehensive guide to using Sagit CLI commands and features.</p></div>} />
            <Route path="/user-guide/*" element={<div className="docs-prose"><h1>CLI Commands</h1><p>Detailed documentation of all Sagit commands.</p></div>} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/features" element={<div className="docs-prose"><h1>Features</h1><p>Core features and capabilities of Sagit.</p></div>} />
            <Route path="/development" element={<Development />} />
            <Route path="/development/*" element={<Development />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/related-work" element={<div className="docs-prose"><h1>Related Work</h1><p>Research and related projects in the code analysis space.</p></div>} />
            <Route path="/future-work" element={<div className="docs-prose"><h1>Future Work</h1><p>Planned enhancements and long-term vision for Sagit.</p></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DocsLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
