import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import YouPain from "../../assets/images/you.png";

const Hero = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Récupérer le tableau des slides à partir du localStorage s'il existe
    const slidesFromLocalStorage = localStorage.getItem("slides");
    if (slidesFromLocalStorage) {
      setSlides(JSON.parse(slidesFromLocalStorage));
    } else {
      // Ajouter les images en slide à un tableau et le stocker dans le localStorage
      const images = [hero3, hero2, YouPain];
      const slides = images.map((image) => ({
        image,
        caption: "Some representative placeholder content",
      }));
      localStorage.setItem("slides", JSON.stringify(slides));
      setSlides(slides);
    }
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              id="slide-Your"
            >
              <img
                src={slide.image}
                className= {`d-block w-100 ${index === 0 || index === 1 ? 'hero-slider' : 'Yourpain'}`}
                alt="hero"
              />
              <div className="carousel-caption">
                <h5>{`Slide ${index + 1} label`}</h5>
                <p>{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
