import "../../styles/homePage/Banner.css";
import React from 'react';

const Banner = () => {
          return (
  
                <section style={{ color: 'black' }} className="container-fluid">
                  < img src={require('../../assets/img/general/banerAlfonso.jpg')} alt="Snow" style={{ width: '100%' }} />
                  <div className="over-top-left">FERRO</div>
                 
                </section>
              );
            }
            
export default Banner;