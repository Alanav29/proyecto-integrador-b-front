import React from 'react';
import '../../styles/homePageBanner/Banner.css';

const Banner = () => {
  return (
    <section>
      <div className="d-none d-md-block"> 
        <div  className="container-fluid mb-4"> 
          <img src={require('../../assets/img/general/AlfonsoBanner.jpg')} alt="Snow" style={{ width: '100%' }} />
          <div className="over-top-left " style={{ color: 'black' }}>FERRO</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;