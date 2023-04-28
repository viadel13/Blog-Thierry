import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { BsArrowRightCircle } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero_area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Fouemene Thierry
            </Link>
            <button
              className="navbar-toggler"
              id="navbar-respon-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" id="toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 pe-2 mb-lg-0">
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
        </nav>

        <div className="vh-100 d-flex align-items-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <div>
                        <h1 className="text-white">
                          Welcome To
                          <span>Content Writing Services</span>
                        </h1>
                        <p className="text-white">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <div>
                        <h1 className="text-white">
                          Welcome To
                          <span>Content Writing Services</span>
                        </h1>
                        <p className="text-white">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn-1">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-button-next"><BsArrowRightCircle /></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>

      {/* offcanvas */}
      <div
        class="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Fouemene Thierry
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-bg-dark">
          {/* <div class="dropdown mt-3">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div> */}
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
    </>
  );
};

export default Hero;
