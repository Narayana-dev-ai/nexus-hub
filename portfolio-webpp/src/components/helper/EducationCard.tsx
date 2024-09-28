import { LineCard } from "../cards/LineCard";
import "./EducationCard.scss";

export const EducationCard = () => {
  return (
    <div className="education__card">
      <LineCard title="Education's" />
      <div className="card">
        <div className="card__header">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <h2 className="card__title">Heading Here</h2>
        </div>
        <div className="card__content">
          <div className="card__cont">
            <div className="description">
              <h3>DESCRIPTION: </h3>{" "}
            </div>
            <div className="stack">STACK</div>
            <div className="responsibilities">RESPONSIBILITIES</div>
          </div>
        </div>
      </div>
    </div>
  );
};
