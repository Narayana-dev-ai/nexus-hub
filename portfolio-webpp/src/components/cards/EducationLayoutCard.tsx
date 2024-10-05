import "./EducationLayoutCard.scss";

export const EducationLayoutCard: React.FC<{
  title: string;
  description: string;
  responsibility: string[];
  tStack: string[];
  from: string;
  to?: string;
  status: string;
}> = ({ title, description, responsibility, tStack, from, to, status }) => {
  return (
    <div className="ed_card">
      <div className="card__header">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__content">
        <div className="card__cont">
          <div className="description">
            <h3>DESCRIPTION: </h3> <p>{description}</p>
          </div>
          <div className="stack">
            <h3>RESPONSIBILITIES: </h3>
            <div className="stack__items">
              {responsibility.map((item, index) => {
                return <p key={index} className="response">{item}</p>;
              })}
            </div>
          </div>
          <div className="stack">
            <h3>TechStack Used: </h3>
            <div className="stack__items">
              {tStack.map((item, index) => {
                return (
                  <button key={index} className="stack_btn">
                    <h4>{item}</h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
