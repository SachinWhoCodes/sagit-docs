import { CheckCircle, Circle, Clock } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="prose-docs">
      <h1>Roadmap</h1>
      
      <p className="text-lg text-muted-foreground">
        Sagit's development is organized into milestones. Here's what's done, 
        in progress, and planned for the future.
      </p>

      <div className="space-y-8 mt-12">
        {/* Milestone 1 */}
        <div className="border-l-4 border-success pl-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-success" />
            <h2 className="!mt-0 !mb-0">Milestone 1: Core Functionality</h2>
            <span className="text-sm text-success font-medium">COMPLETED</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Foundation for Git-integrated semantic analysis and metadata collection.
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>Hook Installation</strong> - Setup command installs prepare-commit-msg, commit-msg, post-commit hooks</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>Commit Message Drafting</strong> - Automated Conventional Commits message generation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>Metadata Store</strong> - Append-only JSONL storage with CSV export</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>CLI Commands</strong> - diff, describe, impacted, meta, verify</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>Java Semantic Analysis</strong> - Types and methods delta tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span><strong>Test Impact Analysis</strong> - Basic pattern-matching for impacted tests</span>
            </li>
          </ul>
        </div>

        {/* Milestone 2 */}
        <div className="border-l-4 border-brand pl-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-brand" />
            <h2 className="!mt-0 !mb-0">Milestone 2: Enhanced Analysis</h2>
            <span className="text-sm text-brand font-medium">IN PROGRESS</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Expand language support and deepen semantic insights.
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span><strong>Polyglot Analyzers</strong> - Add Python, JavaScript, TypeScript, Go support</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span><strong>Richer Deltas</strong> - Track field changes, imports, annotations</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span><strong>PR Bot</strong> - Automated PR comments with change summaries (GitHub/GitLab)</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span><strong>Impact Graph</strong> - Call graph-based impact analysis beyond pattern matching</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span><strong>Performance Tuning</strong> - Incremental analysis, caching, parallel processing</span>
            </li>
          </ul>
        </div>

        {/* Milestone 3 */}
        <div className="border-l-4 border-muted-foreground pl-6">
          <div className="flex items-center gap-3 mb-4">
            <Circle className="w-6 h-6 text-muted-foreground" />
            <h2 className="!mt-0 !mb-0">Milestone 3: Ecosystem & AI</h2>
            <span className="text-sm text-muted-foreground font-medium">PLANNED</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Integrations, tooling, and AI-powered features.
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <span><strong>IDE Plugins</strong> - VS Code and IntelliJ IDEA extensions for in-editor insights</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <span><strong>AI Summaries</strong> - LLM-powered commit message and PR description generation</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <span><strong>Web Dashboard</strong> - Visualize repository trends, hotspots, contributor stats</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <span><strong>CI/CD Integration</strong> - Official plugins for Jenkins, GitHub Actions, GitLab CI</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <span><strong>Custom Analyzers API</strong> - Plugin system for domain-specific analysis</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg border border-border bg-card">
        <h3 className="!mt-0">Community Priorities</h3>
        <p>
          Roadmap priorities may shift based on community feedback. 
          Vote on features and propose new ideas in our{" "}
          <a href="https://github.com/sagit-tool/sagit/discussions">GitHub Discussions</a>.
        </p>
      </div>

      <div className="mt-8 p-6 rounded-lg border border-brand/20 bg-brand/5">
        <h3 className="!mt-0 text-brand">Get Involved</h3>
        <p>
          Want to help build these features? Check out the{" "}
          <a href="/development">Development Guide</a> and look for issues 
          labeled <code>help wanted</code> or <code>good first issue</code> on GitHub.
        </p>
      </div>
    </div>
  );
}
