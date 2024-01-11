// Banner.js

import "../../styles/homePageBanner/Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="d-none d-md-block">
        <div className="container-fluid mb-4">
          <img
            src={require("../../assets/img/general/AlfonsoBanner.jpg")}
            alt="Snow"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="d-md-none">
        <div className="container-fluid mb-4">
          <img
            src={require("../../assets/img/general/BannerPhone.jpg")}
            alt="Snow"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;