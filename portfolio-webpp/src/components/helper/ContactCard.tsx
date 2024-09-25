import "./ContactCard.scss";

export const ContactCard = () => {
  const handleDownload = () => {
    const pdfUrl = "NARAYANA REDDY LAKKIREDDY.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "my_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact__card">
      <div className="card">
        <div className="card__details">
          <h1 className="home__title">
            Hi,
            <br />
            This is <span className="home__title__color">Narayana</span>
            <br />
            I'm a Software Engineer
          </h1>
          <div className="home_btn">
            <a href="/skills" className="contact__btn">
              CONTACT ME
            </a>
            <button onClick={handleDownload} className="contact__btn">
              GET RESUME
            </button>
          </div>
        </div>

        <div className="profile__pic">
          <img alt="profile_image" src="profilePhoto.jpg" className="photo" />
        </div>
      </div>
    </div>
  );
};
