import "./GlowCard.scss"

export const GlowCard = (props: any) => {
  return (
    <div className="card" role="button">
      <span className="glow"></span>
      <div className="inner">
        <span>cool</span>Glowing shadows <br />
        {props.txt}
      </div>
    </div>
  );
};
