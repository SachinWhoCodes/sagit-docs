import { CheckCircle, Clock, Calendar, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const roadmapPhases = [
  {
    phase: "Phase 1: Foundation",
    status: "completed",
    progress: 100,
    items: [
      { title: "MVP scope defined", completed: true },
      { title: "Maven/Picocli setup", completed: true },
      { title: "JGit integration", completed: true },
    ]
  },
  {
    phase: "Phase 2: Core Git Operations", 
    status: "in-progress",
    progress: 60,
    items: [
      { title: "sagit init - Repository initialization", completed: true },
      { title: "sagit add - File staging via JGit's DirCache", completed: true },
      { title: "sagit commit - Commit operations", completed: false },
      { title: "sagit status - Repository status", completed: false },
      { title: "sagit log - Commit history", completed: false },
    ]
  },
  {
    phase: "Phase 3: Analysis Layer",
    status: "planned",
    progress: 0,
    items: [
      { title: "Variable/function tracking with JavaParser", completed: false },
      { title: "SQLite metadata storage", completed: false },
      { title: "Code structure analysis", completed: false },
      { title: "Dependency tracking", completed: false },
    ]
  },
  {
    phase: "Phase 4: Intelligence Features",
    status: "planned", 
    progress: 0,
    items: [
      { title: "CLI queries for metadata", completed: false },
      { title: "AI descriptions via HTTP", completed: false },
      { title: "File enrichment system", completed: false },
      { title: "Smart code suggestions", completed: false },
    ]
  }
]

const upcomingFeatures = [
  {
    title: "analyze",
    description: "Deep code analysis and pattern detection",
    timeline: "Q2 2024"
  },
  {
    title: "search", 
    description: "Semantic code search across repositories",
    timeline: "Q2 2024"
  },
  {
    title: "describe",
    description: "AI-powered code documentation generation", 
    timeline: "Q3 2024"
  },
  {
    title: "enrich",
    description: "Automated code enhancement suggestions",
    timeline: "Q3 2024"
  },
  {
    title: "timeline",
    description: "Visual code evolution timeline",
    timeline: "Q4 2024"
  },
  {
    title: "impact",
    description: "Change impact analysis across codebase",
    timeline: "Q4 2024"
  },
  {
    title: "export",
    description: "Export analysis data in multiple formats",
    timeline: "Q1 2025"
  }
]

export default function Roadmap() {
  const overallProgress = roadmapPhases.reduce((acc, phase) => acc + phase.progress, 0) / roadmapPhases.length

  return (
    <div className="docs-prose space-y-8">
      <div className="space-y-4">
        <h1>Roadmap</h1>
        <p className="text-xl text-muted-foreground">
          Track Sagit's development progress and upcoming features.
        </p>
      </div>

      {/* Overall Progress */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2>Overall Progress</h2>
          <Badge variant="outline">{Math.round(overallProgress)}% Complete</Badge>
        </div>
        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Development Progress</span>
                <span className="font-medium">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Currently focusing on core Git compatibility and basic analysis features.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Development Phases */}
      <section className="space-y-6">
        <h2>Development Phases</h2>
        <div className="space-y-6">
          {roadmapPhases.map((phase, index) => (
            <Card key={index} className={`${phase.status === 'completed' ? 'border-green-200 bg-green-50/50' : phase.status === 'in-progress' ? 'border-primary/20 bg-primary/5' : 'border-border'}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    {phase.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {phase.status === 'in-progress' && <Zap className="h-5 w-5 text-primary" />}
                    {phase.status === 'planned' && <Clock className="h-5 w-5 text-muted-foreground" />}
                    <span>{phase.phase}</span>
                  </CardTitle>
                  <Badge variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}>
                    {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </Badge>
                </div>
                {phase.status !== 'planned' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-1" />
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`h-4 w-4 ${item.completed ? 'text-green-500' : 'text-muted-foreground'}`} />
                      <span className={item.completed ? 'text-foreground' : 'text-muted-foreground'}>
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Status Highlight */}
      <section className="space-y-4">
        <h2>Current Status</h2>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Now Working</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-600">✅ Completed</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code>sagit init</code> creates both .git and .sagit directories</li>
                <li>• <code>sagit add</code> stages files via JGit's DirCache</li>
                <li>• Both commands tested and fully functional</li>
                <li>• Top layer over JGit for extensibility</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">🔄 In Progress</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Implementing remaining Git commands (commit, status, log)</li>
                <li>• Setting up test infrastructure</li>
                <li>• Documentation and API design</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Upcoming Commands */}
      <section className="space-y-6">
        <h2>Upcoming Commands</h2>
        <p className="text-muted-foreground">
          These advanced commands will be added after achieving 100% Git parity:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingFeatures.map((feature, index) => (
            <Card key={index} className="transition-smooth hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    <code className="text-primary">sagit {feature.title}</code>
                  </CardTitle>
                  <Badge variant="outline">
                    <Calendar className="h-3 w-3 mr-1" />
                    {feature.timeline}
                  </Badge>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Contributing */}
      <section className="space-y-4">
        <h2>Get Involved</h2>
        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Sagit is an open-source project and we welcome contributions! 
              Whether it's code, documentation, testing, or feature suggestions, 
              your input helps shape the future of intelligent source code analysis.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">Java Development</Badge>
              <Badge variant="outline">Maven Build</Badge>
              <Badge variant="outline">JGit Integration</Badge>
              <Badge variant="outline">CLI Design</Badge>
              <Badge variant="outline">Testing</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}