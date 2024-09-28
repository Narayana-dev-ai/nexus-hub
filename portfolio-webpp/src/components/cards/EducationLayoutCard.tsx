import "./EducationLayoutCard.scss";

export const EducationLayoutCard = () => {
  return (
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
  );
};
