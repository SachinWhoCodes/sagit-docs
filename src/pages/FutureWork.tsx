import { Sparkles, Brain, Rocket, Users, Zap } from "lucide-react";

export default function FutureWork() {
  return (
    <div className="prose-docs">
      <h1>Future Work</h1>
      
      <p className="text-lg text-muted-foreground">
        Ideas and experiments for the next evolution of Sagit. These are explorations 
        beyond the current roadmap — ambitious, experimental, and community-driven.
      </p>

      <div className="space-y-8 mt-12">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="!mt-0 !mb-2">AI-Powered Code Understanding</h2>
            <p className="text-muted-foreground">
              Integrate LLMs for natural language queries over your repository history. 
              Ask questions like "What changed in authentication last month?" and get 
              semantic summaries powered by Sagit's metadata.
            </p>
            <ul className="text-sm">
              <li>Context-aware commit summarization</li>
              <li>Automated PR reviews with reasoning</li>
              <li>Natural language queries over metadata store</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="!mt-0 !mb-2">Predictive Impact Analysis</h2>
            <p className="text-muted-foreground">
              Move beyond pattern matching to ML-based prediction of affected code paths. 
              Train models on repository history to predict test failures before CI runs.
            </p>
            <ul className="text-sm">
              <li>Failure prediction based on change patterns</li>
              <li>Confidence scores for impact estimates</li>
              <li>Historical accuracy metrics</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="!mt-0 !mb-2">Developer Insights Dashboard</h2>
            <p className="text-muted-foreground">
              Web-based visualization of repository health and trends. Identify hotspots, 
              track complexity growth, and measure refactoring impact over time.
            </p>
            <ul className="text-sm">
              <li>Churn analysis and hotspot detection</li>
              <li>Contributor activity and code ownership</li>
              <li>Complexity trends and technical debt tracking</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="!mt-0 !mb-2">Team Collaboration Features</h2>
            <p className="text-muted-foreground">
              Shared metadata stores for teams. Aggregate insights across repositories 
              and developers to identify knowledge silos and collaboration opportunities.
            </p>
            <ul className="text-sm">
              <li>Multi-repo aggregation and cross-project analysis</li>
              <li>Knowledge transfer recommendations</li>
              <li>Code review auto-assignment based on expertise</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand to-brand2 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="!mt-0 !mb-2">Real-Time Hooks & Streaming</h2>
            <p className="text-muted-foreground">
              Stream commit metadata to external systems (Kafka, webhooks) for real-time 
              analytics. Enable event-driven workflows triggered by semantic changes.
            </p>
            <ul className="text-sm">
              <li>Webhook notifications for specific change patterns</li>
              <li>Kafka/Redis pub/sub for CI/CD integration</li>
              <li>GraphQL API for metadata queries</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg border border-warning/20 bg-warning/5">
        <h3 className="!mt-0 text-warning">Experimental Territory</h3>
        <p>
          These ideas are highly experimental and may never be implemented. 
          They represent possible directions based on community interest and research value.
        </p>
      </div>

      <div className="mt-8 p-6 rounded-lg border border-brand/20 bg-brand/5">
        <h3 className="!mt-0">Want to Explore?</h3>
        <p>
          If any of these directions excite you, let's discuss! Open a{" "}
          <a href="https://github.com/sagit-tool/sagit/discussions" target="_blank" rel="noopener noreferrer">
            GitHub Discussion
          </a>{" "}
          or propose a research collaboration. Sagit is open to academic partnerships 
          and industry experiments.
        </p>
      </div>

      <div className="mt-8 p-6 rounded-lg border border-border bg-card">
        <h3 className="!mt-0">Research Opportunities</h3>
        <p className="mb-4">
          Sagit's metadata format and semantic analysis make it a great platform for 
          software engineering research:
        </p>
        <ul>
          <li>Mining software repositories (MSR) studies</li>
          <li>Commit message quality analysis</li>
          <li>Test selection and prioritization research</li>
          <li>Developer productivity metrics</li>
          <li>Code evolution and technical debt tracking</li>
        </ul>
        <p className="!mb-0">
          Interested in using Sagit for research? Contact us via{" "}
          <a href="mailto:sagit-research@example.com">email</a>.
        </p>
      </div>
    </div>
  );
}
