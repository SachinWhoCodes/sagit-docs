import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SagitTerminal } from "@/components/SagitTerminal";
import { Github, ArrowRight, Zap, Database, Brain, Gauge } from "lucide-react";

export default function Index() {
  return (
    <div className="prose-docs">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/5 via-transparent to-transparent" />
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Badge variant="secondary">Version 1.0.0</Badge>
          <Badge variant="outline">Java 17+</Badge>
          <Badge variant="outline">Maven</Badge>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">
          Sagit
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Semantic Analysis & Git Indexing Tool
        </p>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
          A Git superset for intelligent development — semantic diffs, commit metadata, 
          and impact analysis with full Git compatibility.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/getting-started">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/SachinWhoCodes/sagit" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sagit?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card hover:border-brand/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Git-Compatible</h3>
            <p className="text-muted-foreground">
              Works seamlessly with your existing Git workflow. Install hooks once, 
              and Sagit enriches every commit automatically.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card hover:border-brand/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Metadata Store</h3>
            <p className="text-muted-foreground">
              Local JSONL append-only store with CSV export. Track semantic changes, 
              file statistics, and commit metadata over time.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card hover:border-brand/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Ready Insights</h3>
            <p className="text-muted-foreground">
              Semantic diff analysis tracks types, methods, and language-specific changes. 
              Perfect for AI-powered code review and analysis.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card hover:border-brand/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-4">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
            <p className="text-muted-foreground">
              Sub-second performance for most operations. Lightweight JAR with minimal 
              overhead on your commit workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Try Sagit</h2>
        <p className="text-center text-muted-foreground mb-8">
          Interactive CLI simulator - try commands like <code className="bg-code-bg px-2 py-1 rounded">sagit diff --semantic</code> or <code className="bg-code-bg px-2 py-1 rounded">sagit verify</code>
        </p>
        
        <SagitTerminal height={450} />
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Start</h2>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-2">Build Sagit</h3>
              <code className="block bg-code-bg p-3 rounded-lg text-sm">
                mvn -q -DskipTests package
              </code>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-2">Install in Your Repo</h3>
              <code className="block bg-code-bg p-3 rounded-lg text-sm">
                java -jar target/sagit-0.1.0.jar setup
              </code>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-2">Make a Commit</h3>
              <p className="text-muted-foreground mb-2">
                Sagit automatically drafts commit messages and records metadata!
              </p>
              <code className="block bg-code-bg p-3 rounded-lg text-sm">
                git add . && git commit
              </code>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link to="/getting-started">
              Full Installation Guide
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
