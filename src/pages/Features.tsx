import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function Features() {
  return (
    <div className="prose-docs">
      <h1>Features</h1>
      
      <p className="text-lg text-muted-foreground">
        Sagit provides intelligent Git enhancements through semantic analysis, 
        automated metadata collection, and impact analysis.
      </p>

      <h2>Commit Message Drafting</h2>
      
      <p>
        The <code>prepare-commit-msg</code> hook automatically drafts commit messages 
        following Conventional Commits format based on semantic analysis.
      </p>

      <h3>How It Works</h3>
      
      <ul>
        <li>Analyzes staged changes with JavaParser</li>
        <li>Detects new methods/classes → <code>feat:</code></li>
        <li>Detects modifications → <code>fix:</code> or <code>refactor:</code></li>
        <li>Detects doc changes → <code>docs:</code></li>
        <li>Generates descriptive scope and summary</li>
      </ul>

      <h3>Example</h3>
      
      <CodeBlock
        language="text"
        code={`feat(parser): add semantic analysis for Java methods

- Implemented AST traversal using JavaParser
- Added method signature extraction
- Created delta computation logic`}
      />

      <Callout variant="success">
        You can edit the drafted message before committing. Sagit provides a 
        starting point, not a mandate.
      </Callout>

      <h2>Semantic Diff</h2>
      
      <p>
        Go beyond line-based diffs. Sagit tracks language-specific changes like 
        types, methods, and structure.
      </p>

      <h3>What It Tracks</h3>
      
      <ul>
        <li><strong>File stats</strong> - Added, modified, deleted counts</li>
        <li><strong>Java deltas</strong> - Types and methods changed</li>
        <li><strong>Directory breakdown</strong> - Which top-level dirs were touched</li>
        <li><strong>Language detection</strong> - Files grouped by language</li>
      </ul>

      <h3>Use Cases</h3>
      
      <ul>
        <li>Understand impact before committing</li>
        <li>Generate release notes from semantic changes</li>
        <li>Feed AI models with structured diff data</li>
      </ul>

      <CodeBlock
        language="bash"
        code={`sagit diff --semantic`}
      />

      <h2>Metadata Store</h2>
      
      <p>
        Every commit is recorded with semantic metadata in an append-only JSONL file. 
        This creates a queryable history of your codebase evolution.
      </p>

      <h3>Schema</h3>
      
      <CodeBlock
        language="json"
        code={`{
  "commitId": "c56fb55e...",
  "timestamp": "2025-10-26T17:09:33.093Z",
  "summary": {
    "files_added": 0,
    "files_modified": 1,
    "files_deleted": 0,
    "java_methods_delta": 1,
    "top_dirs": ["src"]
  }
}`}
      />

      <h3>Export to CSV</h3>
      
      <p>
        Convert metadata to CSV for analysis in Excel, Google Sheets, or data science tools:
      </p>
      
      <CodeBlock
        language="bash"
        code={`sagit meta export --format csv > metadata.csv`}
      />

      <Callout variant="info">
        The JSONL format is append-only for performance and simplicity. 
        Each line is a complete, valid JSON object.
      </Callout>

      <h2>Describe Command</h2>
      
      <p>
        Generate human-readable summaries of changes between any two Git references. 
        Perfect for PR descriptions and release notes.
      </p>

      <h3>Markdown Output</h3>
      
      <CodeBlock
        language="markdown"
        code={`# Change Summary
- Range: \`v1.0\` → \`HEAD\`
- Files: +5 ~12 -2
- Java Δ: types=3, methods=18

## Files by language
- java: 12
- md: 3
- yaml: 2

## Top-level directories touched
- src: 12
- docs: 3
- config: 2`}
      />

      <h3>JSON Output</h3>
      
      <p>
        Machine-readable format for CI/CD pipelines and automation:
      </p>
      
      <CodeBlock
        language="bash"
        code={`sagit describe --since v1.0 --format json | jq .`}
      />

      <h2>Impacted Tests</h2>
      
      <p>
        Identify test files likely affected by changes. Uses pattern matching 
        rules from <code>.sagit/tests.map</code>.
      </p>

      <h3>Configuration</h3>
      
      <p>
        Edit <code>.sagit/tests.map</code> to define source → test mappings:
      </p>
      
      <CodeBlock
        language="text"
        code={`src/main/java/(.+)\\.java -> src/test/java/$1Test.java
src/(.+)/service/(.+)\\.java -> src/$1/service/$2Test.java`}
      />

      <h3>Example</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit impacted --since main`}
      />

      <p>Output:</p>
      
      <CodeBlock
        language="text"
        code={`src/test/java/demo/HelloTest.java
src/test/java/parser/SemanticTest.java`}
      />

      <Callout variant="warn" title="Beta Feature">
        Impact analysis is heuristic-based. It suggests likely tests but 
        may not catch all dependencies. Use as a guide, not gospel.
      </Callout>

      <h2>Verify Command</h2>
      
      <p>
        Health check for your Sagit installation. Ensures all hooks, configs, 
        and the runtime JAR are present and valid.
      </p>

      <h3>What It Checks</h3>
      
      <ul>
        <li>Runtime JAR exists at <code>.sagit/sagit.jar</code></li>
        <li>Git hooks are installed and executable</li>
        <li>Configuration files are valid JSON</li>
        <li>Test mapping file exists</li>
      </ul>

      <CodeBlock
        language="bash"
        code={`sagit verify`}
      />

      <Callout variant="success">
        Run verify after setup or if you encounter issues. It's a quick 
        diagnostic tool.
      </Callout>

      <h2>Future Features</h2>
      
      <p>
        See the <a href="/roadmap">Roadmap</a> for planned enhancements including:
      </p>
      
      <ul>
        <li>Polyglot support (Python, JavaScript, Go)</li>
        <li>Richer semantic deltas (field changes, imports)</li>
        <li>PR bot for GitHub/GitLab</li>
        <li>IDE plugins (VS Code, IntelliJ)</li>
        <li>AI-powered commit summaries</li>
      </ul>
    </div>
  );
}
