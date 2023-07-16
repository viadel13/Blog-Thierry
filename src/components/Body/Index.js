import affiche from "../../assets/images/affiche.jpg";
import affiche2 from "../../assets/images/affiche2.jpeg";
import { BsCameraReels, BsIncognito, BsLayers } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';

const Body = () => {

  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
 
  const { ref: myRef, inView: visible } = useInView();




  return (
    <>
      <div className="container mt-3">
        <div className={`row ${visible1 ? "visible1" : "invisible1"}`} ref={myRef1}>
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

        <div className={`row ${visible2 ? "visible2" : "invisible2"}`}  ref={myRef2}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={affiche}
                    className="img-fluid rounded-start"
                    alt="affiche"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card mb-3 card1-body">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={affiche2}
                    className="img-fluid rounded-start"
                    alt="affiche"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 section2">
        <div className={`container ${visible ? "visible" : "invisible"}`}  ref={myRef}>
          <div className="row">
            <div className="col-md-6">
              <div  className="box">
                <div className="img-box">
                  {/* <img src="images/s-1.png" alt=""> */}
                </div>
             
                    <h4>Written with Love</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content t,
                    </p>
                    <a href="">Read More</a>
                  
             
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
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
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
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
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
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
