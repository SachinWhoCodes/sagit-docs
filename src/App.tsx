import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import GettingStarted from "./pages/GettingStarted";
import UserGuide from "./pages/UserGuide";
import Architecture from "./pages/Architecture";
import Features from "./pages/Features";
import Development from "./pages/Development";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import RelatedWork from "./pages/RelatedWork";
import FutureWork from "./pages/FutureWork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="sagit-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/user-guide" element={<UserGuide />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/features" element={<Features />} />
              <Route path="/development" element={<Development />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/team" element={<Team />} />
              <Route path="/related-work" element={<RelatedWork />} />
              <Route path="/future-work" element={<FutureWork />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
