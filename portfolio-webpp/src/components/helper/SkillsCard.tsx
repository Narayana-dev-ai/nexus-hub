import { skills } from "../../utils/skills";
import "./SkillsCard.scss";

export const SkillsCard = () => {
  return (
    <div className="skill__card">
      <div className="skill__describe">
        <h1>Hey </h1>
      </div>
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
              </div>
            );
          })}
          <div className="card">
            <img
              alt="neptune"
              src="/skills_icons/neptun.png"
              className="skill__icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
