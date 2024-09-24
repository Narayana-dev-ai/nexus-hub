import "./HeaderController.scss";

export const HeaderController = () => {
  return (
    <div className="header__block">
      <nav className="nav">
        <div>
          <a href="/">Narayana Reddy</a>
        </div>

        <div className="nav__list">
          <ul>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="/skills">SKILLS</a>
            </li>
            <li>
              <a href="/education">EDUCATION</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
