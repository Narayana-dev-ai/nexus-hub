import { handleDownload } from "../../utils/commons_modules";
import "./AvCardHome.scss";

export const AvCardHome = () => {
  return (
    <div className="full__card">
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
          <a href="/skills" className="contact__btn">
            CONTACT ME
          </a>
          <button className="contact__btn" onClick={handleDownload}>
            GET RESUME
          </button>
        </div>
      </div>
      <div className="video_block__card">
        <div className="video__card">
          <video playsInline disableRemotePlayback autoPlay muted loop>
            <source src="banner_content.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
