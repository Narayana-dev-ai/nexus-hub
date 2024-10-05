import "./GlassEffectCard.scss";

export const GlassEffectCard: React.FC<{
  name: string;
  major: string;
  duration: string;
  place: string;
}> = ({ name, major, duration, place }) => {
  return (
    <div className="glass_container">
      <div className="glass-card">
        <h2>{name}</h2>
        <div className="major_duration">
          <h3>{major}</h3>
          <h5>{duration}</h5>
        </div>
        <p>
          <span>Place : {"  "}</span> {place}
        </p>
      </div>
    </div>
  );
};
