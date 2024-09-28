import { GlowCard } from "../cards/GlowCard";
import { LineCard } from "../cards/LineCard";
import "./ExperienceCard.scss";

export const ExperienceCard = () => {
  return (
    <div className="experience__card">
      <LineCard title="Work Experience" />
      <div className="experience__card__items">
        <GlowCard
          company="AIRBUS GROUP INDIA Pvt Ltd"
          role="Software Engineer 😎"
          duration="Mar 2024 to till Date"
          resp="I'm working on both front-end and back-end development processes. I design, develop, and maintain fully-fledged and functioning platforms with databases or servers."
          stack="React Js, Java, TypeScript, JavaScript, AWS, Docker"
        />
        <GlowCard
          company="AIRBUS GROUP INDIA Pvt Ltd"
          role="Associate Software Engineer 🙂"
          duration="Aug 2021 to Mar 2024"
          resp="I'm working on both front-end and back-end development processes. I design, develop, and maintain fully-fledged and functioning platforms with databases or servers."
          stack="React Js, Java, TypeScript, JavaScript, AWS, PySpark, Python"
        />
        <GlowCard
          company="Glenwood LLc"
          role="System Engineer 🙂"
          duration="May 2021 to Jul 2021"
          resp="I'm working on front-end. Building React.js UI components and providing best UX with Quality"
          stack="React Js, Python"
        />
      </div>
    </div>
  );
};
