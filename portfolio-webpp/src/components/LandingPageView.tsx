import { HeaderController } from "./header_section/HeaderController";
import "./LandingPageView.scss";

export const LandingPageView = () => {
  return (
    <div className="container">
      <div className="extra__container"></div>
      <header className="header">
        <HeaderController />
      </header>
    </div>
  );
};
