import { handleDownload } from "../../utils/commons_modules";
import "./ContactCard.scss";
import { ContactFormModal } from "./ContactFormModal";

export const ContactCard = () => {
  return (
    <div className="card">
      <div className="card__details">
        <h1 className="home__title">
          Hi,
          <br />
          This is <span className="home__title__color">Narayana</span>
          <br />
          I'm a Software Engineer
          <p>
            ⚡Crazy programmer! Professional & Ambitious. I love the wide range
            of stacks of Software Engineering that includes Frontend, Backend,
            and DevOps⚡
          </p>
        </h1>
        <div className="home_btn">
          <button className="contact__btn" onClick={ContactFormModal}>
            CONTACT ME
          </button>
          <button onClick={handleDownload} className="contact__btn">
            GET RESUME
          </button>
        </div>
      </div>

      <div className="profile__pic">
        <img alt="profile_image" src="profilePhoto.jpg" className="photo" />
      </div>
    </div>
  );
};
