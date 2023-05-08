import affiche from "../../assets/images/affiche.jpg";
import affiche2 from "../../assets/images/affiche2.jpeg";
import { BsCameraReels, BsIncognito, BsLayers } from "react-icons/bs";
import { Blurhash } from "react-blurhash";
import { useState } from "react";

const Body = () => {
  const blurhashValue = "LCCFq^EK5Sbb}[NZNwV[9uoLxsWB";
  const blurhashValue2 = "LMB3sY%MD%M}~WxuIoR+r;ofR-oe";

  const [loadImage, setLoadImage] = useState(false);
  const [loadImage2, setLoadImage2] = useState(false);

  const handleLoad = ()=>{
    setLoadImage(true)
  }
  const handleLoad2 = ()=>{
    setLoadImage2(true)
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-5">
              <div>
                <span className="iconDescrip d-flex align-items-center mb-3">
                  <BsCameraReels />
                </span>
                <h3 className="text-center display-5 textIcon">Evenement</h3>
              </div>
              <div>
                <span className="iconDescrip d-flex align-items-center mb-3">
                  <BsIncognito />
                </span>
                <h3 className="text-center display-5  textIcon">Evenement</h3>
              </div>
              <div>
                <span className="iconDescrip d-flex align-items-center mb-3">
                  <BsLayers />
                </span>
                <h3 className="text-center display-5 textIcon">Evenement</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                {!loadImage && (
                    <Blurhash
                      hash={blurhashValue}
                      className="w-100 h-100 "
                    />
                  )}
                  <img
                    src={affiche}
                    class="img-fluid rounded-start"
                    alt="affiche"
                    onLoad={handleLoad}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card mb-3 card1-body">
              <div class="row g-0">
                <div class="col-md-4">
                  {!loadImage2 && (
                    <Blurhash
                      hash={blurhashValue2}
                      className="w-100 h-100"
                 
                    />
                  )}
                  <img
                    src={affiche2}
                    class="img-fluid rounded-start"
                    alt="affiche"
                    onLoad={handleLoad2}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 section2">
        <div className="container">
          <div className="row">
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  {/* <img src="images/s-1.png" alt=""> */}
                </div>
                <h4>Written with Love</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content t,
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  {/* <img src="images/s-1.png" alt=""> */}
                </div>
                <h4>Written with Love</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content t,
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="row ">
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  {/* <img src="images/s-1.png" alt=""> */}
                </div>
                <h4>Written with Love</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content t,
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  {/* <img src="images/s-1.png" alt=""> */}
                </div>
                <h4>Written with Love</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content t,
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
