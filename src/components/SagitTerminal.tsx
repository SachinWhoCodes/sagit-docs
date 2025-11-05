import { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

const COMMAND_OUTPUTS: Record<string, string> = {
  "sagit": `Usage: sagit [-hV] [COMMAND]
Git enhancer with semantic analysis
  -h, --help      Show this help message and exit.
  -V, --version   Print version information and exit.
Commands:
  setup      Install hooks and copy the runtime jar to .sagit/sagit.jar
  diff       Show semantic diff summary
  describe   Summarize changes since a ref
  impacted   List likely impacted tests since a ref
  meta       Show/Export recorded metadata
  verify     Health check for hooks/runtime`,

  "sagit --help": `Usage: sagit [-hV] [COMMAND]
Git enhancer with semantic analysis
  -h, --help      Show this help message and exit.
  -V, --version   Print version information and exit.
Commands:
  setup      Install hooks and copy the runtime jar to .sagit/sagit.jar
  diff       Show semantic diff summary
  describe   Summarize changes since a ref
  impacted   List likely impacted tests since a ref
  meta       Show/Export recorded metadata
  verify     Health check for hooks/runtime`,

  "sagit setup": `✅ Sagit hooks installed. Jar copied to .sagit/sagit.jar
Created/verified: .git/hooks/prepare-commit-msg, commit-msg, post-commit
Added: .sagit/config.json, .sagit/tests.map`,

  "sagit diff --semantic": `# For staged changes vs HEAD:
Files: +0 ~1 -0
Java Δ: types=0, methods=1
Top-level dirs: src:1`,

  "sagit describe --since HEAD~1": `# Change Summary
- Range: \`HEAD~1\` → \`HEAD\`
- Files: +0 ~1 -0
- Java Δ: types=0, methods=1

## Files by language
- java: 1

## Top-level directories touched
- src: 1`,

  "sagit describe --since main --format json": `{"files_added":0,"files_modified":3,"files_deleted":0,"java_methods_delta":2,"top_dirs":["src","docs"]}`,

  "sagit impacted --since HEAD~1": `src/test/java/demo/HelloTest.java`,

  "sagit meta last": `{"commitId":"c56fb55e...","timestamp":"2025-10-26T17:09:33.093Z","summary":{"files_modified":1,"java_methods_delta":1,"files_added":0,"files_deleted":0}}`,

  "sagit verify": `Sagit verify:
  ✔ runtime jar: .sagit/sagit.jar
  ✔ hooks: prepare-commit-msg, commit-msg, post-commit
  ✔ config: .sagit/config.json
  ✔ tests map: .sagit/tests.map
All good. Happy hacking!`,
};

interface SagitTerminalProps {
  height?: number;
  className?: string;
}

export function SagitTerminal({ height = 400, className = "" }: SagitTerminalProps) {
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; content: string }>>([]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandHistory = history.filter(h => h.type === "input").map(h => h.content);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory(prev => [...prev, { type: "input", content: trimmed }]);

    const output = COMMAND_OUTPUTS[trimmed] || COMMAND_OUTPUTS["sagit"];
    setHistory(prev => [...prev, { type: "output", content: output }]);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <div className={`rounded-lg border border-border bg-bg-panel overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary border-b border-border">
        <Terminal className="w-4 h-4 text-brand" />
        <span className="text-sm font-medium">Sagit Terminal</span>
        <span className="ml-auto text-xs text-muted-foreground">Ctrl+L to clear</span>
      </div>
      
      <div
        ref={terminalRef}
        className="p-4 font-mono text-sm overflow-y-auto bg-code-bg"
        style={{ height }}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-1">
            {entry.type === "input" ? (
              <div className="flex gap-2">
                <span className="text-brand font-semibold">sagit$</span>
                <span className="text-foreground">{entry.content}</span>
              </div>
            ) : (
              <pre className="text-muted-foreground whitespace-pre-wrap pl-8">{entry.content}</pre>
            )}
          </div>
        ))}
        
        <div className="flex gap-2">
          <span className="text-brand font-semibold">sagit$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
