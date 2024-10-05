import { EducationLayoutCard } from "../cards/EducationLayoutCard";
import { LineCard } from "../cards/LineCard";
import "./ProjectsCard.scss";

export const ProjectsCard = () => {
  return (
    <div className="project__card">
      <LineCard title="Project's" />
      <div className="project__card__items">
        <EducationLayoutCard
          title="Skywise Products(SHM)"
          description="This application is useful for Airbus and Airlines to maintain Aircraft activities."
          responsibility={[
            "Worked on lambda serverless web services.",
            "Building React.js UI components and providing best UX with Quality.",
            "Designed and implemented end-to-end Lambda functions.",
          ]}
          tStack={[
            "React Js",
            "Java",
            "AWS",
            "PySpark",
            "Git",
            "Junit",
            "React Testing Library",
            "Cucumber Testing",
            "HTML5",
            "CSS",
            "SASS",
          ]}
          from="Aug 2021"
          status="Progrssing..."
        />
        <EducationLayoutCard
          title="Finance Peer Website"
          description="This is a Dynamic Website designed for Some Finanance Peer Company"
          responsibility={[
            "Conducted code peer reviews and created Design documentation.",
            "Designed this website with help of wordpress",
          ]}
          tStack={["Wordpress", "HTML", "CSS"]}
          from="Sep 2018"
          to="Jan 2019"
          status="Completed"
        />
        <EducationLayoutCard
          title="Data Management System"
          description="Establishing a user friendly platform for students and staff to manage their data"
          responsibility={[
            "Reviewed all the scenarios",
            "Designed a high level user diagram",
            "Implemented with Python tkinter and SQLite3 database",
          ]}
          from="Apr 2018"
          tStack={["Python", "SQLite3"]}
          to="Dec 2019"
          status="Completed"
        />
      </div>
    </div>
  );
};
