import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1, }} />
      <div className="hero-content">
        <h1>Alvin Wants to Build His Final Year<br /> Project To Complete His B.Sc <br />Cerftification</h1>
        <p>
          He hopes to make use an amazing project using javascript as his core language.
        </p>
        <button className="cta-btn">Get Started</button>
        <button className="cta-btn">Get Started</button>
      </div>

        <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} effect="coverflow" className="mySwiper" modules={[Autoplay]} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>
            <div className="info-div"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-div"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-div"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-div"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-div"></div>
          </SwiperSlide>
        </Swiper>

    </section>
  )
}


export default Hero