import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";

export default function GettingStarted() {
  return (
    <div className="prose-docs">
      <h1>Getting Started</h1>
      
      <p className="text-lg text-muted-foreground">
        Get up and running with Sagit in minutes. This guide covers installation, 
        initial setup, and your first commit with Sagit.
      </p>

      <h2>Prerequisites</h2>
      
      <ul>
        <li><strong>Java 17+</strong> - Required for building and running Sagit</li>
        <li><strong>Git</strong> - Sagit enhances your existing Git workflow</li>
        <li><strong>Maven</strong> - For building from source</li>
      </ul>

      <Callout variant="info" title="System Requirements">
        Sagit has been tested on Linux, macOS, and Windows (PowerShell). 
        It works with any Git repository.
      </Callout>

      <h2>Building Sagit</h2>
      
      <p>Clone the repository and build the shaded JAR:</p>
      
      <CodeBlock
        language="bash"
        code={`git clone https://github.com/sagit-tool/sagit.git
cd sagit
mvn -q -DskipTests package`}
      />

      <p>
        The shaded JAR will be created at <code>target/sagit-0.1.0.jar</code>. 
        This single JAR contains all dependencies.
      </p>

      <h2>Per-Repository Setup</h2>
      
      <p>Navigate to your Git repository and run:</p>
      
      <CodeBlock
        language="bash"
        code={`java -jar /path/to/sagit-0.1.0.jar setup`}
      />

      <p>This command:</p>
      <ul>
        <li>Copies the Sagit JAR to <code>.sagit/sagit.jar</code></li>
        <li>Installs Git hooks: <code>prepare-commit-msg</code>, <code>commit-msg</code>, <code>post-commit</code></li>
        <li>Creates <code>.sagit/config.json</code> for configuration</li>
        <li>Creates <code>.sagit/tests.map</code> for test mapping rules</li>
      </ul>

      <Callout variant="success">
        You only need to run setup once per repository!
      </Callout>

      <h2>Your First Commit</h2>
      
      <p>Make a change to your code and commit as usual:</p>
      
      <CodeBlock
        language="bash"
        code={`echo "public class Demo {}" > src/Demo.java
git add src/Demo.java
git commit`}
      />

      <p>
        Sagit's <code>prepare-commit-msg</code> hook will automatically draft a 
        Conventional Commits-style message based on semantic analysis. After the commit, 
        metadata is recorded to <code>.sagit/metadata.jsonl</code>.
      </p>

      <h3>View Commit Metadata</h3>
      
      <CodeBlock
        language="bash"
        code={`sagit meta last`}
      />

      <p>This displays the metadata for your last commit in JSON format.</p>

      <h2>Platform-Specific Setup</h2>
      
      <h3>Linux / macOS</h3>
      
      <p>Create a shell script for convenience:</p>
      
      <CodeBlock
        language="bash"
        code={`#!/bin/bash
java -jar ~/.sagit/sagit-0.1.0.jar "$@"`}
      />

      <p>Make it executable and add to your PATH:</p>
      
      <CodeBlock
        language="bash"
        code={`chmod +x ~/bin/sagit
export PATH="$HOME/bin:$PATH"`}
      />

      <h3>Windows (PowerShell)</h3>
      
      <p>Create a <code>sagit.ps1</code> script:</p>
      
      <CodeBlock
        language="powershell"
        code={`java -jar "$env:USERPROFILE\\.sagit\\sagit-0.1.0.jar" $args`}
      />

      <p>Or use a batch file <code>sagit.bat</code>:</p>
      
      <CodeBlock
        language="batch"
        code={`@echo off
java -jar "%USERPROFILE%\\.sagit\\sagit-0.1.0.jar" %*`}
      />

      <h2>Verify Installation</h2>
      
      <p>Check that everything is working correctly:</p>
      
      <CodeBlock
        language="bash"
        code={`sagit verify`}
      />

      <p>
        This command checks for the runtime JAR, Git hooks, configuration files, 
        and test mapping. If all checks pass, you're ready to go!
      </p>

      <Callout variant="info" title="Next Steps">
        Now that Sagit is installed, explore the <a href="/user-guide">User Guide</a> 
        to learn about all available commands and features.
      </Callout>
    </div>
  );
}
