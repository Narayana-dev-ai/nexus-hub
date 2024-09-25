import "./HeaderController.scss";

export const HeaderController = () => {
  return (
    <div className="header__block">
      <div className="header__block__img">
        <nav className="nav">
          <div className="header__title">
            <a href="/">Narayana Reddy</a>
          </div>

          <div className="nav__list">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/experience">Works</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/education">Education</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
