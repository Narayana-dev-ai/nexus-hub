import { ContentController } from "./content_section/ContentController";
import { HeaderController } from "./header_section/HeaderController";
import "./LandingPageView.scss";

export const LandingPageView = () => {
  return (
    <div className="container">
      <div className="container__page">
        <HeaderController />
        <ContentController />
      </div>
    </div>
  );
};
