import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import YouPain from "../../assets/images/you.png";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blurhashValue = "LAAcxW^$%dk7~VnnM|N2%JWUIof*";
  const[loadImage, setLoadImage]= useState(false)

  const handleLoad = ()=>{
    setLoadImage(true)
  }

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          {
            !loadImage && <Blurhash hash={blurhashValue} className="d-block w-100 h-100 hero-slider"  />
          }
          <img src={hero3} className="d-block hero-slider" alt="hero" onLoad={handleLoad}  />
          <div className="carousel-caption">
            {/* <img src={YouPain} className="img-fluid Yourpain" alt="Yourpain" /> */}
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <img src={hero2} alt="hero" className="d-block w-100 h-100 hero-slider"/>
          <div className="carousel-caption carousel-customer">
            {/* <img src={YouPain} className="img-fluid Yourpain" alt="Yourpain" /> */}
            <h5 className="mt-4">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="justify-content-center" id="slide-Your">
          <img src={YouPain} className="d-block Yourpain" alt="Yourpain" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
