import "../../styles/homePage/homePage.css";
import React from 'react';

const MiddleCard = () => {
          return (
                    <div className="wrapper">
                      <figure className="card">
                        <img
                          src="../../assets/img/general/Amarillo.webp"
                          width="640"
                          height="640"
                          alt=""
                        />
                        <figcaption>
                          <blockquote>
                            We shape our tools and then the tools shape us.
                          </blockquote>
                          <cite>
                            Attributed to Winston Churchill, Marshall McLuhan, and John Culkin.
                          </cite>
                        </figcaption>
                      </figure>
                    </div>
                  );
                };

export default MiddleCard;