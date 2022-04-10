import React,{useContext} from "react";
import { themeContext } from "../../Context";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{borderColor: "#DDF8FE"}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{color: darkMode ? "skyblue" : "blue"}}>{detail}</span>
      
    </div>
  );
};

export default Card;
