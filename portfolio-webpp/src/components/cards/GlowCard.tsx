import "./GlowCard.scss";

export const GlowCard: React.FC<{
  company: string;
  role: string;
  duration: string;
  resp: string;
  stack: string;
}> = ({ company, role, duration, resp, stack }) => {
  return (
    <div className="g_card" role="button">
      <span className="glow"></span>
      <div className="inner">
        <div className="gl__content">
          <h2>{company}</h2>
          <br />

          <div className="gl__role">
            <h4>{role}</h4>
            <h4 className="duration">{duration}</h4>
          </div>
          <div className="gl__respo">
            <span className="gl__side">Responsibilities</span>
            <p>{resp}</p>
          </div>
          <div className="gl__stack">
            <span className="gl__side">Tech Stack:</span> <p>{stack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
