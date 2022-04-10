import React,{useContext} from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import sristspace from "../../img/sristspace.jpeg";
import Ayush from "../../img/Ayush.jpeg";
import codekhaze from "../../img/codekhaze.png";

import Resume from '../Services/resume.pdf';

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img:sristspace,
      link:"https://sristspace.herokuapp.com",
      head:"Sristspace",
      review:
        "A web app, which serves as a platform for students and professors to share ideas and notes.Main Tech tools are -- Reactjs, Flask, Mongodb, Tailwind css.",
    },
    {
      img: Ayush,
      link:Resume,
      head:"About me",
      review:
        "I am a engineering student, persuing B.tech form Sri Ram Group Jabalpur. I am open-minded and a team player and very optimistic in tough time.",
    },
    {
      img: codekhaze,
      link:"https://www.codechef.com/users/ayush_nigam_1",
      head:"Competitive Programming",
      review:
        "I'm a dedicated problem solver and I love to do CP. I'm a three star codechef programmer and I  qualify the second round of codekhaze and secure second rank in RGPV",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Something  </span>
        <span style={{ color: darkMode ? "" : "orange" }}>Exceptional Work </span>
        <span>in brief explanation</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
              
                <img src={client.img} alt="" />
                <h1><b>{client.head}</b></h1>
                <span>{client.review}</span>
                <br></br>
                <button style={{color:"green",backgroundColor:"rgb(18, 207, 18)",border:"1px solid #DDF8FE",borderRadius:"10px"}}><a href={client.link} style={{textDecoration:"none",textShadow:"0px 0px 10px lightgreen"}} >learn more</a></button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
