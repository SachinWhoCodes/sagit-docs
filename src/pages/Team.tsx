import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sachin Verma",
    role: "Lead Developer",
    bio: "Full-stack engineer passionate about developer tools and semantic analysis.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFiXOvEL1_nuQ/profile-displayphoto-scale_200_200/B4DZmA9qhxH4AY-/0/1758805287785?e=1764806400&v=beta&t=b-xzR8_Sw47tfF7VcBIK16GdDxEDw3qiPErVcN39KEw",
    github: "https://github.com/SachinWhoCodes",
    linkedin: "https://linkedin.com/in/SachinWhoCodes",
  },
  {
    name: "Krishna Dixit",
    role: "Developer",
    bio: "Software engineer focused on Git internals and metadata persistence.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D35AQGYzj0z-DXkCg/profile-framedphoto-shrink_200_200/B4DZhbKTE2G8AY-/0/1753876083325?e=1763838000&v=beta&t=AvKNexYLkm3g6RR732sNTgtypC3MN3WrdRKRBKi5rdk",
    github: "https://github.com/kaydee19",
    linkedin: "https://linkedin.com/in/kaydee19",
  },
  {
    name: "Dr. Puneet K. Johari",
    role: "Reviewer",
    bio: "Academic advisor providing guidance on research and implementation.",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQFBR18RO-LTnQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616564055125?e=1764806400&v=beta&t=pGQmDO1D4p4K8YMs7NfkuxRI1ZHuyiGc4k9JEjrbrVY",
  },
];

export default function Team() {
  return (
    <div className="prose-docs">
      <h1>Team</h1>
      
      <p className="text-lg text-muted-foreground">
        Meet the people behind Sagit. We're a small team of developers passionate 
        about making Git smarter and more insightful.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 not-prose">
        {team.map((member) => (
          <Card key={member.name} className="hover:border-brand/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-brand/20"
                />
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brand text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                
                <div className="flex gap-2">
                  {member.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg border border-border bg-card not-prose">
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="text-muted-foreground mb-4">
          Sagit is open source and we welcome contributions from developers worldwide. 
          Whether you're fixing bugs, adding features, or improving documentation, 
          we'd love to have you on board.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="https://github.com/sagit-tool/sagit" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-4 h-4" />
              View on GitHub
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="https://github.com/sagit-tool/sagit/discussions" target="_blank" rel="noopener noreferrer">
              Join Discussions
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg border border-brand/20 bg-brand/5 not-prose">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-brand" />
          Contact
        </h3>
        <p className="text-muted-foreground">
          Questions, feedback, or collaboration opportunities? Reach out via{" "}
          <a href="https://github.com/sagit-tool/sagit/issues" className="text-brand hover:text-brand2 transition-colors">
            GitHub Issues
          </a>{" "}
          or{" "}
          <a href="mailto:sagit@example.com" className="text-brand hover:text-brand2 transition-colors">
            email us
          </a>.
        </p>
      </div>
    </div>
  );
}
