import "./LandingPageView.scss";

export const LandingPageView = () => {
  return (
    <div className="container">
      <header className="header">HEADER</header>
      <main className="main main__content">
        <section className="section">PERSONALDETAILS</section>
        <section className="section">EXPERIENCES</section>
        <section className="section">SKILLS</section>
        <section className="section">PROJECTS</section>
        <section className="section">EDUCATIONS</section>
        <section className="section">CONTACT ME</section>
      </main>
      <footer className="footer">FOOTER</footer>
    </div>
  );
};
