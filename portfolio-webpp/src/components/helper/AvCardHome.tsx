import "./AvCardHome.scss";

export const AvCardHome = () => {
  return (
    <div className="full__card">
      <div className="text__area">
        <div>
          <p>
            Hello All, MySelf <h2>Narayana Reddy</h2>
          </p>
        </div>
        <div>
          <p>
            <h1>
              I am Working as a Software Developer @AIRBUS I am Working as a
              Software Developer @AIRBUS I am Working as a Software Developer
              @AIRBUS
            </h1>
          </p>
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
