import { Terminal, Download, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function GettingStarted() {
  return (
    <div className="docs-prose space-y-8">
      <div className="space-y-4">
        <h1>Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to install and set up Sagit in your development environment.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h2>Prerequisites</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Java 11 or higher</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Maven 3.6 or higher</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Git 2.0 or higher</span>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="space-y-6">
        <h2>Installation</h2>
        
        <div className="grid gap-6">
          {/* Maven */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Badge variant="maven">Maven</Badge>
                <CardTitle className="text-xl">Maven Dependency</CardTitle>
              </div>
              <CardDescription>
                Add Sagit to your Maven project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-code-bg p-4 rounded-md text-sm overflow-x-auto">
                <code>{`<dependency>
    <groupId>com.sagit</groupId>
    <artifactId>sagit-core</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>`}</code>
              </pre>
            </CardContent>
          </Card>

          {/* CLI Installation */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Badge variant="cli">CLI</Badge>
                <CardTitle className="text-xl">Command Line Tool</CardTitle>
              </div>
              <CardDescription>
                Install the Sagit CLI globally
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-code-bg p-4 rounded-md text-sm overflow-x-auto">
                <code>{`# Download the latest release
curl -L https://github.com/sagit/releases/latest/download/sagit.jar -o sagit.jar

# Make it executable (Unix/Linux/macOS)
chmod +x sagit.jar

# Add to your PATH (optional)
export PATH=$PATH:/path/to/sagit`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="space-y-4">
        <h2>Quick Setup</h2>
        <p>
          Once installed, you can quickly set up Sagit in any directory:
        </p>
        
        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="font-semibold">Initialize Repository</span>
              </div>
              <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Initialize a new Sagit repository
sagit init

# This creates both .git and .sagit directories
# .git - Standard Git repository
# .sagit - Enhanced metadata storage`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="font-semibold">Add Files</span>
              </div>
              <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Add files with enhanced tracking
sagit add src/main/java/MyClass.java

# Add all files in directory
sagit add .

# View status (works like Git)
sagit status`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Verification */}
      <section className="space-y-4">
        <h2>Verify Installation</h2>
        <p>
          Confirm that Sagit is working correctly:
        </p>
        <Card>
          <CardContent className="p-6">
            <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
              <code>{`# Check version
sagit --version

# View help
sagit --help

# Test basic functionality
mkdir test-repo && cd test-repo
sagit init
echo "Hello Sagit" > test.txt
sagit add test.txt
sagit status`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2>Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="transition-smooth hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">User Guide</CardTitle>
              <CardDescription>
                Learn about all available CLI commands
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/user-guide">Explore Commands</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-smooth hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Architecture</CardTitle>
              <CardDescription>
                Understand how Sagit works internally
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/architecture">View Architecture</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}