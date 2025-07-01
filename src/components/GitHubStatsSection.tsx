import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubStatsProps {
  username?: string;
  showStreak?: boolean;
  showLanguages?: boolean;
  showStats?: boolean;
}

const GitHubStatsSection = ({
  username = "github-username",
  showStreak = true,
  showLanguages = false,
  showStats = true,
}: GitHubStatsProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 text-center">
          <Github className="h-10 w-10 mb-4 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            GitHub Stats
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Check out my open source contributions and coding activity on
            GitHub.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {showStreak && (
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contribution Streak</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted/20 flex items-center justify-center">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`}
                    alt="GitHub streak stats"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {showStats && (
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">GitHub Statistics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted/20 flex items-center justify-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&count_private=true`}
                    alt="GitHub stats"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {showLanguages && (
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Most Used Languages</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted/20 flex items-center justify-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true`}
                    alt="Most used languages"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Visit My GitHub Profile
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
