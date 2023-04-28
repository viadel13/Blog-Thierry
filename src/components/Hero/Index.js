import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import YouPain from "../../assets/images/YouPain.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      {/* offcanvas */}
      <div
        class="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Thierry Fouomene 
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-bg-dark">
          <ul className="navbar-nav ms-auto mb-4 pe-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active menu-active"
                aria-current="page"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item menu-active dropdown">
              <Link
                className="nav-link menu-active dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                WORKS
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                PUBLICATIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                BIOGRAPHY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                COMMING SOON
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-active" to="/">
                ARCHIVES
              </Link>
            </li>
          </ul>
        </div>
      </div> 
      {/* fin offcanvas */}
      
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item active"
          >
            <img src={hero3}  class="d-block w-100 hero-slider" alt="hero" />
            <div class="carousel-caption">
              <img
                src={YouPain}
                className="img-fluid Yourpain animate__animated animate__bounceInLeft"
                alt="Yourpain"
              />
              <h5
                className="animate__animated animate__bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                Second slide label
              </h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div
            class="carousel-item"
          >
            <img src={hero2}  class="d-block w-100 hero-slider" alt="hero" />
            <div class="carousel-caption carousel-customer">
              <img
                src={YouPain}
                className="img-fluid Yourpain animate__animated animate__bounceInLeft"
                alt="Yourpain"
              />
              <h5
                className=" mt-4 animate__animated animate__bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                Second slide label
              </h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>

            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
