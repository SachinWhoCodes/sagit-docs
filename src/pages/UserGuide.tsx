import { CodeBlock } from "@/components/CodeBlock";
import { SagitTerminal } from "@/components/SagitTerminal";
import { Callout } from "@/components/Callout";

export default function UserGuide() {
  return (
    <div className="prose-docs">
      <h1>User Guide</h1>
      
      <p className="text-lg text-muted-foreground">
        Complete reference for Sagit CLI commands. Each command includes examples 
        and an interactive terminal simulator.
      </p>

      <h2 id="commands">Commands Overview</h2>
      
      <p>Sagit provides the following commands:</p>
      
      <ul>
        <li><strong>setup</strong> - Install hooks and runtime JAR</li>
        <li><strong>diff</strong> - Show semantic diff summary</li>
        <li><strong>describe</strong> - Summarize changes since a ref</li>
        <li><strong>impacted</strong> - List likely impacted tests</li>
        <li><strong>meta</strong> - Show/export recorded metadata</li>
        <li><strong>verify</strong> - Health check for installation</li>
      </ul>

      <h2 id="setup">sagit setup</h2>
      
      <p>
        Installs Git hooks and copies the Sagit runtime JAR to your repository's 
        <code>.sagit</code> directory.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit setup`}
      />

      <h3>What It Does</h3>
      
      <ul>
        <li>Creates <code>.sagit/sagit.jar</code> (runtime)</li>
        <li>Installs <code>prepare-commit-msg</code> hook (drafts messages)</li>
        <li>Installs <code>commit-msg</code> hook (validates format)</li>
        <li>Installs <code>post-commit</code> hook (records metadata)</li>
        <li>Creates <code>.sagit/config.json</code></li>
        <li>Creates <code>.sagit/tests.map</code></li>
      </ul>

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={300} />

      <Callout variant="info">
        Run this once per repository. You can re-run to update hooks or fix installation issues.
      </Callout>

      <h2 id="diff">sagit diff</h2>
      
      <p>
        Shows a semantic diff summary comparing staged changes vs HEAD. 
        Includes file counts, language-specific deltas, and directory breakdown.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit diff --semantic`}
      />

      <h3>Output</h3>
      
      <p>Example output:</p>
      
      <CodeBlock
        language="text"
        code={`# For staged changes vs HEAD:
Files: +0 ~1 -0
Java Δ: types=0, methods=1
Top-level dirs: src:1`}
      />

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={300} />

      <h2 id="describe">sagit describe</h2>
      
      <p>
        Generates a summary of changes between a given Git reference and HEAD. 
        Output can be formatted as Markdown or JSON.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit describe --since HEAD~1
sagit describe --since main --format json`}
      />

      <h3>Flags</h3>
      
      <ul>
        <li><code>--since &lt;ref&gt;</code> - Git reference to compare against (required)</li>
        <li><code>--format &lt;markdown|json&gt;</code> - Output format (default: markdown)</li>
      </ul>

      <h3>Markdown Output</h3>
      
      <CodeBlock
        language="markdown"
        code={`# Change Summary
- Range: \`HEAD~1\` → \`HEAD\`
- Files: +0 ~1 -0
- Java Δ: types=0, methods=1

## Files by language
- java: 1

## Top-level directories touched
- src: 1`}
      />

      <h3>JSON Output</h3>
      
      <CodeBlock
        language="json"
        code={`{"files_added":0,"files_modified":3,"files_deleted":0,"java_methods_delta":2,"top_dirs":["src","docs"]}`}
      />

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={350} />

      <h2 id="impacted">sagit impacted</h2>
      
      <p>
        Identifies test files likely impacted by changes since a given reference. 
        Uses pattern matching rules from <code>.sagit/tests.map</code>.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit impacted --since HEAD~1`}
      />

      <h3>Example Output</h3>
      
      <CodeBlock
        language="text"
        code={`src/test/java/demo/HelloTest.java`}
      />

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={300} />

      <Callout variant="info" title="Test Mapping">
        Configure test mapping rules in <code>.sagit/tests.map</code> to improve 
        accuracy. Uses regex patterns to match source files to test files.
      </Callout>

      <h2 id="meta">sagit meta</h2>
      
      <p>
        Shows or exports commit metadata recorded by the <code>post-commit</code> hook. 
        Metadata is stored in <code>.sagit/metadata.jsonl</code>.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit meta last                    # Show last commit
sagit meta export --format csv    # Export all metadata as CSV`}
      />

      <h3>Example Output</h3>
      
      <CodeBlock
        language="json"
        code={`{"commitId":"c56fb55e...","timestamp":"2025-10-26T17:09:33.093Z","summary":{"files_modified":1,"java_methods_delta":1,"files_added":0,"files_deleted":0}}`}
      />

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={300} />

      <h2 id="verify">sagit verify</h2>
      
      <p>
        Health check for your Sagit installation. Verifies that all hooks, 
        configuration files, and the runtime JAR are present and valid.
      </p>

      <h3>Usage</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit verify`}
      />

      <h3>Example Output</h3>
      
      <CodeBlock
        language="text"
        code={`Sagit verify:
  ✔ runtime jar: .sagit/sagit.jar
  ✔ hooks: prepare-commit-msg, commit-msg, post-commit
  ✔ config: .sagit/config.json
  ✔ tests map: .sagit/tests.map
All good. Happy hacking!`}
      />

      <h3>Interactive Demo</h3>
      
      <SagitTerminal height={350} />

      <Callout variant="success" title="Troubleshooting">
        If verify fails, run <code>sagit setup</code> again to repair your installation.
      </Callout>
    </div>
  );
}
