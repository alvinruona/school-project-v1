import React from "react";
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Alvin Wants to Build His Final Year<br /> Project To Complete His B.Sc Cerftification</h1>
        <p>
          He hopes to make use an amazing project using javascript as his core language.
        </p>
        <button className="cta-btn">Get Started</button>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="info">
      <div className="info-div" style={ infoBox}></div>
      <div className="info-div" style={ infoBox2}></div>
      <div className="info-div" style={ infoBox3}></div>
      <div className="info-div" style={ infoBox2}></div>
      <div className="info-div" style={ infoBox}></div>
      </div>
    </section>
  )
}

const infoBox = {
  height: "300px", width: "17%"
};
const infoBox2 = {
  height: "250px", width: "15%" , margin: "50px 0 0 0"
};
const infoBox3 = {
  height: "200px", width: "13%" , margin: "100px 0 0 0"
};


export default Hero