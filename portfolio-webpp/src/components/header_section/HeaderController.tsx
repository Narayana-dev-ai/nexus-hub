import "./HeaderController.scss";
import { ContactCard } from "../helper/ContactCard";
import { ExperienceCard } from "../helper/ExperienceCard";
import { SkillsCard } from "../helper/SkillsCard";
import { EducationCard } from "../helper/EducationCard";
import { ProjectsCard } from "../helper/ProjectsCard";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "../helper/HomePage";

export const HeaderController = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <div>
          <a href="/">Narayana Reddy</a>
        </div>

        <div className="nav__list">
          <ul>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="/skills">SKILLS</a>
            </li>
            <li>
              <a href="/education">EDUCATION</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ContactCard />} />
        <Route path="/experience" element={<ExperienceCard />} />
        <Route path="/skills" element={<SkillsCard />} />
        <Route path="/education" element={<EducationCard />} />
        <Route path="/projects" element={<ProjectsCard />} />
      </Routes>
    </React.Fragment>
  );
};
