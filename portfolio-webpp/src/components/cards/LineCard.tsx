import "./LineCard.scss";

export const LineCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header__line">
      <div className="line__flex">
        <span />
        <h3 className="line__title">{title}</h3>
        <span />
      </div>
    </div>
  );
};
