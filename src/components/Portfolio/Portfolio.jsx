import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import sristspace from "../../img/sristspace.jpeg";
import weather from "../../img/weather.png";
import newsapp from "../../img/newsapp.png";
import spotify from "../../img/spotify.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
      <a href="https://sristspace.herokuapp.com"><SwiperSlide>
       <img src={sristspace} alt="" />
        </SwiperSlide>
        </a>
        <SwiperSlide>
          <img src={weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spotify} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={newsapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
