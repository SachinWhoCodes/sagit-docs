import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";

export default function Development() {
  return (
    <div className="prose-docs">
      <h1>Development Guide</h1>
      
      <p className="text-lg text-muted-foreground">
        Learn how to build, test, and contribute to Sagit. This guide covers 
        project structure, coding standards, and release processes.
      </p>

      <h2>Building from Source</h2>
      
      <h3>Clone the Repository</h3>
      
      <CodeBlock
        language="bash"
        code={`git clone https://github.com/sagit-tool/sagit.git
cd sagit`}
      />

      <h3>Build with Maven</h3>
      
      <CodeBlock
        language="bash"
        code={`# Full build with tests
mvn clean package

# Skip tests (faster)
mvn -q -DskipTests package

# Run tests only
mvn test`}
      />

      <h3>Shaded JAR vs Plain JAR</h3>
      
      <p>
        Maven generates two JARs in <code>target/</code>:
      </p>
      
      <ul>
        <li>
          <strong>sagit-0.1.0.jar</strong> - Shaded/uber JAR with all dependencies. 
          This is what users should run.
        </li>
        <li>
          <strong>sagit-0.1.0-plain.jar</strong> - Library JAR without dependencies. 
          For embedding in other projects.
        </li>
      </ul>

      <Callout variant="info">
        Always distribute the shaded JAR for end users. The plain JAR requires 
        all dependencies on the classpath.
      </Callout>

      <h2>Project Structure</h2>
      
      <CodeBlock
        language="text"
        code={`sagit/
├── src/
│   ├── main/java/sagit/
│   │   ├── cli/          # CLI commands (Picocli)
│   │   ├── hooks/        # Git hook implementations
│   │   ├── analyzer/     # Semantic analysis (JavaParser)
│   │   ├── store/        # Metadata storage (JSONL)
│   │   └── model/        # Data models
│   └── test/java/sagit/
│       └── ...           # Unit and integration tests
├── pom.xml               # Maven build configuration
└── README.md`}
      />

      <h3>Key Modules</h3>
      
      <ul>
        <li>
          <strong>cli/</strong> - Command-line interface using Picocli. Each subcommand 
          is a separate class.
        </li>
        <li>
          <strong>hooks/</strong> - Git hook scripts and implementations. Hooks invoke 
          the runtime JAR.
        </li>
        <li>
          <strong>analyzer/</strong> - Semantic analysis using JavaParser. Computes 
          deltas for types, methods, etc.
        </li>
        <li>
          <strong>store/</strong> - Metadata persistence. Append-only JSONL writer 
          and CSV exporter.
        </li>
      </ul>

      <h2>Coding Standards</h2>

      <h3>Java Version</h3>
      
      <p>
        Sagit targets <strong>Java 17</strong>. Use modern Java features like 
        records, pattern matching, and text blocks where appropriate.
      </p>

      <h3>Code Style</h3>
      
      <ul>
        <li>Follow standard Java conventions (Google or Oracle style)</li>
        <li>Use meaningful variable and method names</li>
        <li>Keep methods focused and under 50 lines</li>
        <li>Add Javadoc for public APIs</li>
        <li>Use <code>final</code> for immutable variables</li>
      </ul>

      <h3>Testing</h3>
      
      <ul>
        <li>Write unit tests for all new features</li>
        <li>Use JUnit 5 and AssertJ for assertions</li>
        <li>Mock external dependencies (Git, file system) when needed</li>
        <li>Integration tests should use real Git repos (in <code>target/test-repos</code>)</li>
      </ul>

      <CodeBlock
        language="bash"
        code={`# Run all tests
mvn test

# Run specific test
mvn test -Dtest=SemanticAnalyzerTest`}
      />

      <h2>Versioning</h2>
      
      <p>
        Sagit follows <strong>Semantic Versioning</strong> (SemVer):
      </p>
      
      <ul>
        <li><code>MAJOR</code> - Incompatible API changes</li>
        <li><code>MINOR</code> - New features, backwards-compatible</li>
        <li><code>PATCH</code> - Bug fixes, backwards-compatible</li>
      </ul>

      <p>
        Current version: <strong>1.0-SNAPSHOT</strong> (pre-release)
      </p>

      <h3>Updating Version</h3>
      
      <CodeBlock
        language="bash"
        code={`mvn versions:set -DnewVersion=1.0.0
mvn versions:commit`}
      />

      <h2>Release Process</h2>

      <h3>1. Prepare Release</h3>
      
      <ul>
        <li>Update <code>CHANGELOG.md</code> with release notes</li>
        <li>Bump version in <code>pom.xml</code></li>
        <li>Run full test suite: <code>mvn clean verify</code></li>
        <li>Update documentation if needed</li>
      </ul>

      <h3>2. Tag and Build</h3>
      
      <CodeBlock
        language="bash"
        code={`git tag -a v1.0.0 -m "Release 1.0.0"
mvn clean package
git push origin v1.0.0`}
      />

      <h3>3. Create GitHub Release</h3>
      
      <ul>
        <li>Go to GitHub Releases</li>
        <li>Create release from tag</li>
        <li>Upload <code>target/sagit-1.0.0.jar</code> as artifact</li>
        <li>Add release notes from CHANGELOG</li>
      </ul>

      <h2>Contributing</h2>

      <h3>Development Workflow</h3>
      
      <ol>
        <li>Fork the repository</li>
        <li>Create a feature branch: <code>git checkout -b feat/my-feature</code></li>
        <li>Make changes and write tests</li>
        <li>Commit with Conventional Commits format</li>
        <li>Push and open a pull request</li>
      </ol>

      <h3>Pull Request Guidelines</h3>
      
      <ul>
        <li>Include tests for new features</li>
        <li>Update documentation as needed</li>
        <li>Follow existing code style</li>
        <li>Keep PRs focused and atomic</li>
        <li>Reference related issues</li>
      </ul>

      <Callout variant="success" title="First-Time Contributors">
        Look for issues labeled <code>good first issue</code> on GitHub. 
        These are great starting points!
      </Callout>

      <h2>Debugging</h2>

      <h3>Enable Verbose Logging</h3>
      
      <CodeBlock
        language="bash"
        code={`export SAGIT_LOG_LEVEL=DEBUG
sagit diff --semantic`}
      />

      <h3>Debug Hooks</h3>
      
      <p>
        Hooks write to <code>.sagit/hooks.log</code>. Check this file if hooks 
        aren't working as expected.
      </p>

      <CodeBlock
        language="bash"
        code={`tail -f .sagit/hooks.log`}
      />

      <h3>IntelliJ IDEA Setup</h3>
      
      <ol>
        <li>Import as Maven project</li>
        <li>Set SDK to Java 17+</li>
        <li>Run <code>MainCli</code> with args like <code>diff --semantic</code></li>
        <li>Set working directory to a test Git repo</li>
      </ol>

      <h2>Dependencies</h2>
      
      <p>Key libraries used by Sagit:</p>
      
      <ul>
        <li><strong>Picocli</strong> - CLI framework with subcommands</li>
        <li><strong>JGit</strong> - Pure Java Git implementation</li>
        <li><strong>JavaParser</strong> - Java AST parser for semantic analysis</li>
        <li><strong>Jackson</strong> - JSON serialization for metadata</li>
        <li><strong>SLF4J + Logback</strong> - Logging</li>
      </ul>

      <Callout variant="info" title="Need Help?">
        Join discussions on <a href="https://github.com/sagit-tool/sagit/discussions">GitHub Discussions</a> 
        or open an issue for bugs and feature requests.
      </Callout>
    </div>
  );
}
