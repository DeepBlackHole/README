import React from "react";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
}

const SkillCategory = ({
  title,
  skills = [],
  className = "",
}: SkillCategoryProps) => {
  return (
    <div className={`bg-background p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors rounded-md p-3"
          >
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-3 py-2 text-sm"
            >
              {skill.icon && <span className="text-primary">{skill.icon}</span>}
              <span>{skill.name}</span>
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
