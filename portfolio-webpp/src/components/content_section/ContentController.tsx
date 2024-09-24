import "./ContentController.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../helper/HomePage";
import { ContactCard } from "../helper/ContactCard";
import { ExperienceCard } from "../helper/ExperienceCard";
import { SkillsCard } from "../helper/SkillsCard";
import { EducationCard } from "../helper/EducationCard";
import { ProjectsCard } from "../helper/ProjectsCard";

export const ContentController = () => {
  return (
    <div className="content__block">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ContactCard />} />
        <Route path="/experience" element={<ExperienceCard />} />
        <Route path="/skills" element={<SkillsCard />} />
        <Route path="/education" element={<EducationCard />} />
        <Route path="/projects" element={<ProjectsCard />} />
      </Routes>
    </div>
  );
};
