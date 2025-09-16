import { ArrowRight, Download, Github, Book, Terminal, Zap, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import heroImage from "@/assets/sagit-hero.jpg"

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Sagit - Source Code Analysis and Git Indexing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative p-12 text-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight text-foreground">
                Sagit
              </h1>
              <p className="text-xl text-primary font-medium">
                Source Code Analysis and Git Indexing Tool
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Git Superset for Intelligent Development
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="java">Java</Badge>
              <Badge variant="maven">Maven</Badge>
              <Badge variant="cli">CLI</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="font-semibold" asChild>
                <Link to="/getting-started">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/SachinWhoCodes/sagit" className="font-semibold">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract/Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Overview</h2>
        <div className="prose max-w-none text-muted-foreground leading-relaxed">
          <p className="text-lg text-center max-w-3xl mx-auto">
            Sagit extends Git with intelligent source code analysis capabilities, 
            providing metadata tracking, AI-powered insights, and enhanced development workflows 
            while maintaining full Git compatibility.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transition-smooth hover:shadow-lg border-border">
            <CardHeader>
              <Terminal className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Git Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Full Git command compatibility with enhanced functionality
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="transition-smooth hover:shadow-lg border-border">
            <CardHeader>
              <Database className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Metadata Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced metadata storage and indexing for code analysis
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="transition-smooth hover:shadow-lg border-border">
            <CardHeader>
              <Brain className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">AI Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-powered code descriptions and intelligent insights
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="transition-smooth hover:shadow-lg border-border">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimized for large repositories with efficient indexing
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Quick Start</h2>
        <Card className="bg-code-bg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-code-foreground">Installation</h3>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`# Add to your Maven project
<dependency>
    <groupId>com.sagit</groupId>
    <artifactId>sagit-core</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>`}</code>
                </pre>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-code-foreground">Basic Usage</h3>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`# Initialize a Sagit repository
sagit init

# Add files with enhanced tracking
sagit add file.java

# Standard Git commands work too
sagit commit -m "Initial commit"`}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 bg-accent/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the documentation to learn more about Sagit's powerful features 
          and how to integrate it into your development workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/getting-started/installation">
              <Download className="mr-2 h-4 w-4" />
              Install Now
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/user-guide">
              <Book className="mr-2 h-4 w-4" />
              Read Documentation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}