export default function RelatedWork() {
  return (
    <div className="prose-docs">
      <h1>Related Work</h1>
      
      <p className="text-lg text-muted-foreground">
        Sagit builds on ideas from existing tools and research in code analysis, 
        Git tooling, and developer productivity.
      </p>

      <h2>Git Extensions</h2>

      <h3>Git-Extras</h3>
      <p>
        A collection of Git utilities that extends Git with additional commands. 
        Sagit differs by focusing on semantic analysis rather than just Git operations.
      </p>
      <p>
        <a href="https://github.com/tj/git-extras" target="_blank" rel="noopener noreferrer">
          github.com/tj/git-extras
        </a>
      </p>

      <h3>Hub / GitHub CLI</h3>
      <p>
        Command-line tools for GitHub integration. While these focus on GitHub-specific 
        workflows, Sagit is Git-first and platform-agnostic.
      </p>
      <p>
        <a href="https://cli.github.com/" target="_blank" rel="noopener noreferrer">
          cli.github.com
        </a>
      </p>

      <h2>Code Analysis Tools</h2>

      <h3>SonarQube</h3>
      <p>
        Static code analysis platform for code quality and security. Sagit complements 
        SonarQube by focusing on change-level semantics and Git integration.
      </p>
      <p>
        <a href="https://www.sonarqube.org/" target="_blank" rel="noopener noreferrer">
          sonarqube.org
        </a>
      </p>

      <h3>CodeScene</h3>
      <p>
        Behavioral code analysis tool that examines how code evolves over time. 
        Sagit shares the focus on temporal analysis but operates at commit-level granularity.
      </p>
      <p>
        <a href="https://codescene.com/" target="_blank" rel="noopener noreferrer">
          codescene.com
        </a>
      </p>

      <h2>Commit Message Automation</h2>

      <h3>Commitizen</h3>
      <p>
        Interactive CLI for Conventional Commits. Sagit automates message drafting 
        using semantic analysis, while Commitizen requires manual input.
      </p>
      <p>
        <a href="https://commitizen-tools.github.io/commitizen/" target="_blank" rel="noopener noreferrer">
          commitizen-tools.github.io
        </a>
      </p>

      <h3>AI Commit Tools</h3>
      <p>
        Tools like <strong>aicommits</strong> use LLMs to generate commit messages. 
        Sagit uses deterministic semantic analysis for speed and privacy, though 
        AI integration is planned (see <a href="/roadmap">Roadmap</a>).
      </p>

      <h2>Semantic Diff Tools</h2>

      <h3>Semantic Merge</h3>
      <p>
        Language-aware merge tool that understands code structure. Sagit focuses 
        on analysis and metadata rather than conflict resolution.
      </p>
      <p>
        <a href="https://www.semanticmerge.com/" target="_blank" rel="noopener noreferrer">
          semanticmerge.com
        </a>
      </p>

      <h3>tree-sitter</h3>
      <p>
        Parser generator for building syntax trees. Sagit uses JavaParser for Java 
        but may adopt tree-sitter for polyglot support in the future.
      </p>
      <p>
        <a href="https://tree-sitter.github.io/" target="_blank" rel="noopener noreferrer">
          tree-sitter.github.io
        </a>
      </p>

      <h2>Research Influence</h2>

      <h3>Mining Software Repositories (MSR)</h3>
      <p>
        Academic field studying repository data for insights on software evolution. 
        Sagit makes MSR-style analysis accessible to individual developers.
      </p>

      <h3>Conventional Commits Specification</h3>
      <p>
        Standard for structured commit messages. Sagit follows this spec for 
        automated message drafting.
      </p>
      <p>
        <a href="https://www.conventionalcommits.org/" target="_blank" rel="noopener noreferrer">
          conventionalcommits.org
        </a>
      </p>

      <h2>Differentiators</h2>

      <p>What makes Sagit unique:</p>

      <ul>
        <li>
          <strong>Local-First</strong> - No cloud dependencies, all processing on-device
        </li>
        <li>
          <strong>Git-Integrated</strong> - Hooks seamlessly enhance existing workflow
        </li>
        <li>
          <strong>Semantic Focus</strong> - Tracks types, methods, and structure, not just lines
        </li>
        <li>
          <strong>Metadata Store</strong> - Queryable history in append-only JSONL format
        </li>
        <li>
          <strong>Developer-Friendly</strong> - Sub-second performance, single JAR deployment
        </li>
      </ul>

      <div className="mt-12 p-6 rounded-lg border border-border bg-card">
        <h3 className="!mt-0">Acknowledgments</h3>
        <p>
          Sagit is built on excellent open-source libraries including{" "}
          <a href="https://www.eclipse.org/jgit/" target="_blank" rel="noopener noreferrer">JGit</a>,{" "}
          <a href="https://javaparser.org/" target="_blank" rel="noopener noreferrer">JavaParser</a>, and{" "}
          <a href="https://picocli.info/" target="_blank" rel="noopener noreferrer">Picocli</a>. 
          We're grateful to these communities.
        </p>
      </div>
    </div>
  );
}
