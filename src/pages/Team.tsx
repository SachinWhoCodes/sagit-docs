import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
  initials: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
    email?: string
  }
  skills?: string[]
}

const teamMembers: Record<string, TeamMember[]> = {
  "Project Owner": [
    {
      name: "Sachin Verma",
      role: "Project Owner & Founder",
      bio: "An Engineer Passionate about making development workflows more efficient.",
      avatar: "/placeholder.svg",
      initials: "AC",
      social: {
        github: "SachinWhoCodes",
        linkedin: "SachinWhoCodes",
        twitter: "SachinWhoCodes",
        website: "sachinwhocodes.dev",
        email: "sachinwhocodes@gmail.com"
      },
      skills: ["Product Strategy", "Leadership", "Architecture"]
    }
  ]
  // ,
  // "Lead Maintainer": [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Lead Maintainer",
  //     bio: "Full-stack engineer with expertise in Git internals and CLI development. Leads the technical direction and code reviews for Sagit.",
  //     avatar: "/placeholder.svg",
  //     initials: "SJ",
  //     social: {
  //       github: "sarahjohnson",
  //       linkedin: "sarah-johnson-dev",
  //       twitter: "sarahj_codes"
  //     },
  //     skills: ["Git Internals", "CLI Development", "Code Review"]
  //   }
  // ],
  // "Core Maintainers": [
  //   {
  //     name: "Marcus Rodriguez",
  //     role: "Core Maintainer",
  //     bio: "Backend specialist focused on performance optimization and core Git operations. Ensures Sagit runs efficiently on all platforms.",
  //     avatar: "/placeholder.svg",
  //     initials: "MR",
  //     social: {
  //       github: "marcusrodriguez",
  //       linkedin: "marcus-rodriguez-dev"
  //     },
  //     skills: ["Performance", "Backend", "Cross-platform"]
  //   },
  //   {
  //     name: "Emma Thompson",
  //     role: "Core Maintainer",
  //     bio: "Frontend and UX specialist who ensures Sagit's CLI interface is intuitive and user-friendly for developers of all skill levels.",
  //     avatar: "/placeholder.svg",
  //     initials: "ET",
  //     social: {
  //       github: "emmathompson",
  //       twitter: "emma_codes",
  //       website: "emmathompson.design"
  //     },
  //     skills: ["UX Design", "Frontend", "CLI UX"]
  //   }
  // ],
  ,
  "Contributors": [
    {
      name: "Vasu Burman",
      role: "Active Contributor",
      bio: "Open source enthusiast contributing to documentation and testing. Helps make Sagit more accessible to new users.",
      avatar: "/placeholder.svg",
      initials: "DK",
      social: {
        github: "vasuburman",
        linkedin: "vasuburman"
      },
      skills: ["Documentation", "Testing", "Community"]
    }
    // ,
    // {
    //   name: "Lisa Wang",
    //   role: "Active Contributor",
    //   bio: "Security researcher ensuring Sagit follows best practices for secure Git operations and data handling.",
    //   avatar: "/placeholder.svg",
    //   initials: "LW",
    //   social: {
    //     github: "lisawang",
    //     twitter: "lisa_security"
    //   },
    //   skills: ["Security", "Git Operations", "Best Practices"]
    // },
    // {
    //   name: "James Miller",
    //   role: "Community Contributor",
    //   bio: "DevOps engineer contributing CI/CD improvements and deployment strategies for Sagit across different environments.",
    //   avatar: "/placeholder.svg",
    //   initials: "JM",
    //   social: {
    //     github: "jamesmiller",
    //     linkedin: "james-miller-devops"
    //   },
    //   skills: ["DevOps", "CI/CD", "Deployment"]
    // }
  ]
}

function SocialLinks({ social }: { social: TeamMember['social'] }) {
  return (
    <div className="flex gap-2">
      {social.github && (
        <Button variant="ghost" size="sm" asChild>
          <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.linkedin && (
        <Button variant="ghost" size="sm" asChild>
          <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.twitter && (
        <Button variant="ghost" size="sm" asChild>
          <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.website && (
        <Button variant="ghost" size="sm" asChild>
          <a href={`https://${social.website}`} target="_blank" rel="noopener noreferrer">
            <Globe className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.email && (
        <Button variant="ghost" size="sm" asChild>
          <a href={`mailto:${social.email}`}>
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="text-lg font-medium">
              {member.initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-muted-foreground font-medium">{member.role}</p>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
          
          {member.skills && (
            <div className="flex flex-wrap gap-1 justify-center">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          
          <SocialLinks social={member.social} />
        </div>
      </CardContent>
    </Card>
  )
}

export default function Team() {
  return (
    <div className="docs-prose">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The passionate developers and contributors who make Sagit possible. 
          Our diverse team brings together expertise in Git internals, CLI development, 
          and developer experience.
        </p>
      </div>

      {Object.entries(teamMembers).map(([category, members]) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">{category}</h2>
          <div className={`grid gap-6 ${
            members.length === 1 
              ? "grid-cols-1 max-w-md mx-auto" 
              : members.length === 2 
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {members.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 p-8 bg-muted/50 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to Contribute?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Sagit is an open-source project and we welcome contributions from developers 
          of all skill levels. Whether it's code, documentation, testing, or community support, 
          there's a place for you on our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a href="https://github.com/sagit-project/sagit" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/sagit-project/sagit/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
              Contributing Guide
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}