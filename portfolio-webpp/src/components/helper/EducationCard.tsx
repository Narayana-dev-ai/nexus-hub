import { EducationLayoutCard } from "../cards/EducationLayoutCard";
import { LineCard } from "../cards/LineCard";
import "./EducationCard.scss";

export const EducationCard = () => {
  return (
    <div className="education__card">
      <LineCard title="Education's" />
      <EducationLayoutCard />
    </div>
  );
};
