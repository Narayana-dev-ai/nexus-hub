import React from "react";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectsCard } from "./ProjectsCard";
import { SkillsCard } from "./SkillsCard";
import { AvCardHome } from "./AvCardHome";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home__page">
      <AvCardHome />
      <ExperienceCard />
      <SkillsCard />
      <ProjectsCard />
      <EducationCard />
    </div>
  );
};
