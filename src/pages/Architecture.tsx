import { Callout } from "@/components/Callout";

export default function Architecture() {
  return (
    <div className="prose-docs">
      <h1>Architecture</h1>
      
      <p className="text-lg text-muted-foreground">
        Sagit follows a <strong>hook-driven, CLI-orchestrated, local-first</strong> design. 
        All analysis and storage happen on your machine with no external dependencies.
      </p>

      <h2>High-Level Design</h2>
      
      <div className="my-8 p-6 rounded-lg border border-border bg-card">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 font-semibold text-brand">Git Hooks</div>
            <div className="flex-1 text-muted-foreground">→</div>
            <div className="w-32 font-semibold text-brand2">Runtime (JAR)</div>
            <div className="flex-1 text-muted-foreground">→</div>
            <div className="w-32 font-semibold text-success">Local Store</div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Hooks trigger semantic analysis → Runtime processes with JGit + JavaParser → 
            Metadata appended to JSONL
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="w-32 font-semibold text-brand">CLI Commands</div>
            <div className="flex-1 text-muted-foreground">→</div>
            <div className="w-32 font-semibold text-brand2">Queries</div>
            <div className="flex-1 text-muted-foreground">→</div>
            <div className="w-32 font-semibold text-success">Results</div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            User runs commands → CLI queries local store and Git → 
            Outputs summaries, diffs, impact analysis
          </div>
        </div>
      </div>

      <h2>Core Components</h2>

      <h3>1. Installer</h3>
      
      <p>
        The <code>sagit setup</code> command installs everything needed for a repository:
      </p>
      
      <ul>
        <li>Copies the shaded JAR to <code>.sagit/sagit.jar</code></li>
        <li>Creates Git hook scripts that invoke the runtime</li>
        <li>Generates initial configuration files</li>
      </ul>

      <Callout variant="info">
        The installer is idempotent - safe to run multiple times.
      </Callout>

      <h3>2. Git Hooks Workflow</h3>
      
      <p>Sagit uses three Git hooks to integrate with your workflow:</p>

      <h4>prepare-commit-msg</h4>
      
      <p>
        Triggered before the commit message editor opens. Analyzes staged changes using 
        JavaParser to detect types/methods modified. Drafts a Conventional Commits message:
      </p>
      
      <ul>
        <li><code>feat:</code> for new methods/classes</li>
        <li><code>fix:</code> for modifications to existing code</li>
        <li><code>docs:</code> for documentation changes</li>
      </ul>

      <h4>commit-msg</h4>
      
      <p>
        Validates that the final commit message follows Conventional Commits format. 
        Can be configured to enforce patterns.
      </p>

      <h4>post-commit</h4>
      
      <p>
        Runs after a successful commit. Performs semantic analysis on the commit diff 
        and appends metadata to <code>.sagit/metadata.jsonl</code>.
      </p>

      <Callout variant="success">
        Hooks are non-blocking and optimized for minimal overhead (typically &lt;200ms).
      </Callout>

      <h3>3. Semantic Analysis Engine</h3>
      
      <p>Built on two core libraries:</p>
      
      <ul>
        <li>
          <strong>JGit</strong> - Pure Java Git implementation for diffing and object access
        </li>
        <li>
          <strong>JavaParser</strong> - Analyzes Java AST to extract types, methods, and structure
        </li>
      </ul>

      <p>
        The engine computes deltas like:
      </p>
      
      <ul>
        <li>Files added/modified/deleted</li>
        <li>Types (classes/interfaces) delta</li>
        <li>Methods delta</li>
        <li>Top-level directory breakdown</li>
      </ul>

      <h3>4. Metadata Store</h3>
      
      <p>
        All metadata is stored in <code>.sagit/metadata.jsonl</code> as append-only 
        JSON Lines. Each line is a commit record with:
      </p>
      
      <ul>
        <li>Commit ID and timestamp</li>
        <li>File statistics (added/modified/deleted)</li>
        <li>Semantic deltas (types, methods)</li>
        <li>Directory breakdown</li>
      </ul>

      <p>
        The CLI can export this to CSV for analysis in spreadsheets or data tools.
      </p>

      <h2>CLI Architecture</h2>
      
      <p>
        The CLI uses the same runtime JAR but operates in query mode. Commands like 
        <code>diff</code> and <code>describe</code> read directly from Git and the 
        metadata store without triggering hooks.
      </p>

      <h3>Query Flow</h3>
      
      <ol>
        <li>User runs <code>sagit describe --since main</code></li>
        <li>CLI computes diff between <code>main..HEAD</code> using JGit</li>
        <li>Semantic analyzer processes each changed file</li>
        <li>Results aggregated and formatted (Markdown or JSON)</li>
        <li>Output printed to stdout</li>
      </ol>

      <h2>Design Principles</h2>

      <h3>Local-First</h3>
      
      <p>
        No network calls, no external services. Everything runs on your machine 
        using local Git objects and metadata.
      </p>

      <h3>Git-Compatible</h3>
      
      <p>
        Sagit doesn't modify Git internals or objects. It reads from <code>.git</code> 
        and writes to <code>.sagit</code>. You can disable Sagit at any time without 
        affecting your Git history.
      </p>

      <h3>Minimal Overhead</h3>
      
      <p>
        Hooks are optimized for speed. Most operations complete in under 200ms. 
        The shaded JAR (~15MB) bundles all dependencies.
      </p>

      <h3>Extensible</h3>
      
      <p>
        The metadata format is open and documented. You can build your own tools 
        on top of <code>metadata.jsonl</code> or extend Sagit with plugins.
      </p>

      <Callout variant="info" title="Learn More">
        For implementation details, see the <a href="/development">Development Guide</a> 
        and explore the source code on GitHub.
      </Callout>
    </div>
  );
}
