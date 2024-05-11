import "./HeroStyle.css";
import React from "react";
// import image from "../assets/slide.jpg";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <backgroundimage
          // src=" {require('./assets/slide.jpg')}"
          alt="HerpImg"
          src={props.heroImg}
        />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
