import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { skills } from "../../utils/skills";
import { LineCard } from "../cards/LineCard";
import "./SkillsCard.scss";
import { skill_data } from "../../utils/commons_modules";

export const SkillsCard = () => {
  return (
    <div className="skill__card">
      <LineCard title="SKILLS" />
      <div className="skill__items">
        <div className="icon__scroll">
          {skills.map((item) => {
            return (
              <div className="card">
                <img
                  alt={item}
                  src={`/skills_icons/${item}.svg`}
                  className="skill__icon"
                />
                <h2>{item}</h2>
              </div>
            );
          })}
          <div className="card">
            <img
              alt="neptune"
              src="/skills_icons/neptun.png"
              className="skill__icon"
            />
            <h2>AWS Neptune</h2>
          </div>
        </div>
      </div>
      <div className="skill_insights">
        <BarChart width={1500} height={600} data={skill_data}>
          <Bar dataKey="skill" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </div>
    </div>
  );
};
