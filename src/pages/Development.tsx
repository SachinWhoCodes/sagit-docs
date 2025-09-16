import { Code2, Wrench, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Development() {
  return (
    <div className="docs-prose space-y-8">
      <div className="space-y-4">
        <h1>Development</h1>
        <p className="text-xl text-muted-foreground">
          Technical details about Sagit's implementation, build process, and current development status.
        </p>
      </div>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2>Tech Stack</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code2 className="h-5 w-5" />
                <span>Core Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Java</span>
                <Badge variant="java">11+</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>JGit</span>
                <Badge variant="outline">6.10.0</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>JavaParser</span>
                <Badge variant="outline">3.26.2</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>SQLite</span>
                <Badge variant="outline">3.49.1.0</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5" />
                <span>Build & CLI</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Maven</span>
                <Badge variant="maven">3.6+</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Picocli</span>
                <Badge variant="cli">4.7.7</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>JUnit</span>
                <Badge variant="outline">5.10.1</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Mockito</span>
                <Badge variant="outline">5.8.0</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Build & Deployment */}
      <section className="space-y-6">
        <h2>Build & Deployment</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Maven Configuration</CardTitle>
            <CardDescription>
              Complete POM.xml configuration for the Sagit project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-code-bg p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.sagit</groupId>
    <artifactId>sagit-core</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>Sagit</name>
    <description>Source Code Analysis and Git Indexing Tool</description>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <jgit.version>6.10.0.202406032230-r</jgit.version>
        <picocli.version>4.7.7</picocli.version>
        <javaparser.version>3.26.2</javaparser.version>
        <sqlite.version>3.49.1.0</sqlite.version>
        <junit.version>5.10.1</junit.version>
        <mockito.version>5.8.0</mockito.version>
    </properties>

    <dependencies>
        <!-- JGit for Git operations -->
        <dependency>
            <groupId>org.eclipse.jgit</groupId>
            <artifactId>org.eclipse.jgit</artifactId>
            <version>\${jgit.version}</version>
        </dependency>

        <!-- Picocli for CLI -->
        <dependency>
            <groupId>info.picocli</groupId>
            <artifactId>picocli</artifactId>
            <version>\${picocli.version}</version>
        </dependency>

        <!-- JavaParser for code analysis -->
        <dependency>
            <groupId>com.github.javaparser</groupId>
            <artifactId>javaparser-core</artifactId>
            <version>\${javaparser.version}</version>
        </dependency>

        <!-- SQLite for metadata storage -->
        <dependency>
            <groupId>org.xerial</groupId>
            <artifactId>sqlite-jdbc</artifactId>
            <version>\${sqlite.version}</version>
        </dependency>

        <!-- Testing dependencies -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>\${junit.version}</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
            <version>\${mockito.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Compiler plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>11</source>
                    <target>11</target>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>info.picocli</groupId>
                            <artifactId>picocli-codegen</artifactId>
                            <version>\${picocli.version}</version>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>

            <!-- Surefire for tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.2.2</version>
            </plugin>

            <!-- Shade plugin for executable JAR -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.5.1</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>shade</goal>
                        </goals>
                        <configuration>
                            <transformers>
                                <transformer 
                                    implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                    <mainClass>com.sagit.cli.SagitCLI</mainClass>
                                </transformer>
                            </transformers>
                            <finalName>sagit</finalName>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>`}</code>
            </pre>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Build Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Compile and run tests
mvn clean test

# Package executable JAR
mvn clean package

# Install to local repository
mvn clean install

# Run specific test class
mvn test -Dtest=SagitCoreTest`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-code-bg p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Clone and build
git clone <repo-url>
cd sagit
mvn clean install

# Run from source
java -cp target/classes com.sagit.cli.SagitCLI

# Or use the shaded JAR
java -jar target/sagit.jar`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Status */}
      <section className="space-y-6">
        <h2>Current Status</h2>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Completed Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Repository Initialization</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                <code>sagit init</code> successfully creates both .git and .sagit directories, 
                establishing the foundation for enhanced Git functionality.
              </p>
              
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">File Staging</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                <code>sagit add</code> stages files via JGit's DirCache, maintaining full 
                Git compatibility while preparing for metadata extraction.
              </p>
              
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">JGit Integration</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Solid foundation built on JGit with extensibility layer for future enhancements.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>In Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Git Command Parity</span>
                  <span className="text-sm text-muted-foreground">40%</span>
                </div>
                <Progress value={40} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Implementing remaining core Git commands: commit, status, log, diff, etc.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Test Infrastructure</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <Progress value={25} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Building comprehensive test suite for all Git operations and edge cases.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contributing Guidelines */}
      <section className="space-y-4">
        <h2>Contributing</h2>
        <p>
          We welcome contributions to Sagit! Here's how to get started with development:
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <p>• Java 11 or higher</p>
                <p>• Maven 3.6+</p>
                <p>• Git 2.0+</p>
                <p>• IDE with Java support</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Areas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">Core Git Ops</Badge>
                <Badge variant="outline">JavaParser</Badge>
                <Badge variant="outline">CLI Design</Badge>
                <Badge variant="outline">Testing</Badge>
                <Badge variant="outline">Documentation</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Code Style & Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Follow standard Java conventions and best practices</li>
              <li>• Write comprehensive unit tests for all new features</li>
              <li>• Document public APIs with JavaDoc</li>
              <li>• Ensure Git compatibility is maintained</li>
              <li>• Add integration tests for CLI commands</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}