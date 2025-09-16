import { Database, GitBranch, Layers, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Architecture() {
  return (
    <div className="docs-prose space-y-8">
      <div className="space-y-4">
        <h1>Architecture</h1>
        <p className="text-xl text-muted-foreground">
          Understanding Sagit's layered architecture and how it extends Git functionality.
        </p>
      </div>

      {/* High-Level Architecture */}
      <section className="space-y-6">
        <h2>High-Level Architecture</h2>
        <p>
          Sagit is built as a layered system on top of JGit, providing Git compatibility 
          while adding enhanced metadata tracking and analysis capabilities.
        </p>
        
        <div className="grid gap-6">
          <Card className="bg-accent/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Sagit Architecture Layers</h3>
                </div>
                
                {/* Layer 4 - CLI/API */}
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">CLI & API Layer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Command-line interface built with Picocli, providing familiar Git commands 
                    plus enhanced analysis features
                  </p>
                  <div className="mt-2 text-xs text-primary font-mono">
                    sagit init, sagit add, sagit analyze, sagit search...
                  </div>
                </div>

                {/* Layer 3 - Analysis */}
                <div className="bg-accent/30 p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Layers className="h-5 w-5 text-foreground" />
                    <h4 className="font-semibold">Analysis Layer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Code analysis using JavaParser, metadata extraction, and AI integration
                  </p>
                  <div className="mt-2 text-xs font-mono text-muted-foreground">
                    JavaParser • SQLite • HTTP AI Services
                  </div>
                </div>

                {/* Layer 2 - Sagit Core */}
                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="h-5 w-5 text-foreground" />
                    <h4 className="font-semibold">Sagit Core</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enhanced Git operations with metadata tracking and extensibility hooks
                  </p>
                  <div className="mt-2 text-xs font-mono text-muted-foreground">
                    .sagit directory • Metadata storage • Extension points
                  </div>
                </div>

                {/* Layer 1 - JGit */}
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <GitBranch className="h-5 w-5 text-foreground" />
                    <h4 className="font-semibold">JGit Foundation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pure Java Git implementation providing core version control functionality
                  </p>
                  <div className="mt-2 text-xs font-mono text-muted-foreground">
                    .git directory • Standard Git operations • Repository management
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Database Schema */}
      <section className="space-y-4">
        <h2>Database Schema</h2>
        <p>
          Sagit uses SQLite to store enhanced metadata alongside the standard Git repository.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Metadata Tables</span>
            </CardTitle>
            <CardDescription>
              Core tables for storing code analysis and tracking information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Files Table */}
              <div className="space-y-2">
                <h4 className="font-semibold">files</h4>
                <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`CREATE TABLE files (
    id INTEGER PRIMARY KEY,
    path TEXT NOT NULL UNIQUE,
    hash TEXT NOT NULL,
    size INTEGER,
    language TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
                </pre>
              </div>

              {/* Functions Table */}
              <div className="space-y-2">
                <h4 className="font-semibold">functions</h4>
                <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`CREATE TABLE functions (
    id INTEGER PRIMARY KEY,
    file_id INTEGER REFERENCES files(id),
    name TEXT NOT NULL,
    signature TEXT,
    start_line INTEGER,
    end_line INTEGER,
    complexity INTEGER,
    ai_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
                </pre>
              </div>

              {/* Variables Table */}
              <div className="space-y-2">
                <h4 className="font-semibold">variables</h4>
                <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`CREATE TABLE variables (
    id INTEGER PRIMARY KEY,
    file_id INTEGER REFERENCES files(id),
    function_id INTEGER REFERENCES functions(id),
    name TEXT NOT NULL,
    type TEXT,
    scope TEXT,
    line_number INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
                </pre>
              </div>

              {/* Dependencies Table */}
              <div className="space-y-2">
                <h4 className="font-semibold">dependencies</h4>
                <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`CREATE TABLE dependencies (
    id INTEGER PRIMARY KEY,
    from_file_id INTEGER REFERENCES files(id),
    to_file_id INTEGER REFERENCES files(id),
    dependency_type TEXT, -- import, extends, implements, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Interaction */}
      <section className="space-y-4">
        <h2>Component Interactions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Git Operations Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">User executes <code>sagit add</code></span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">JGit stages file to index</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Sagit extracts metadata</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Metadata stored in SQLite</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analysis Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">JavaParser parses source</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Extract functions & variables</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Build dependency graph</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">AI enrichment (optional)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Directory Structure */}
      <section className="space-y-4">
        <h2>Directory Structure</h2>
        <p>
          Sagit creates a dual directory structure maintaining Git compatibility:
        </p>
        
        <Card>
          <CardContent className="p-6">
            <pre className="bg-code-bg p-4 rounded-md text-sm overflow-x-auto">
              <code>{`project-root/
├── .git/                    # Standard Git repository
│   ├── objects/
│   ├── refs/
│   ├── index
│   └── config
├── .sagit/                  # Sagit enhanced metadata
│   ├── metadata.db          # SQLite database
│   ├── config.json          # Sagit configuration
│   ├── analysis/            # Analysis results cache
│   └── ai-cache/            # AI descriptions cache
├── src/
│   └── main/java/
└── pom.xml`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Design Principles */}
      <section className="space-y-4">
        <h2>Design Principles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Git Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All standard Git operations work unchanged. Sagit is a superset, not a replacement.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Incremental Enhancement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Enhanced features are layered on top without breaking existing workflows.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Metadata operations are optimized and can run asynchronously when possible.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Extensibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Plugin architecture allows custom analysis and integration with external tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}