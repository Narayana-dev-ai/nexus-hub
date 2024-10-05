import { GlassEffectCard } from "../cards/GlassEffectCard";
import { LineCard } from "../cards/LineCard";
import "./EducationCard.scss";

export const EducationCard = () => {
  return (
    <div className="education__card">
      <LineCard title="Education's" />
      <div className="education__card__items">
        <GlassEffectCard
          name="Tirumala Engineering College"
          major="Computer Science and Engineering"
          duration="Jun 2017   to  Aug 2021"
          place="Narasaraopet, Andhra Pradesh - 522601"
        />
        <GlassEffectCard
          name="Krishnaveni Junior College"
          major="M.P.C (12th Standard)"
          duration="Jun 2015 to May 2017"
          place="Vinukonda, Andhra Pradesh - 522647"
        />
        <GlassEffectCard
          name="Nethaji High School"
          major="S.S.C (10th Standard)"
          duration="Jun 2014  to  May 2015"
          place="Vinukonda, Andhra Pradesh - 522647"
        />
      </div>
    </div>
  );
};
