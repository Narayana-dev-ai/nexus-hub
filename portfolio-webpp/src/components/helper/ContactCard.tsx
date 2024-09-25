import "./ContactCard.scss";

export const ContactCard = () => {
  return (
    <div className="contact__card">
      <div className="card">
        <div className="card__details">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title__color">Narayana</span>
            <br /> Software Engineer
          </h1>
          <a href="/skills" className="contact__btn">
            Contact
          </a>
        </div>

        <div className="profile__pic">
          <img alt="profile_image" src="profilePhoto.jpg" className="photo" />
        </div>
      </div>
    </div>
  );
};
