import affiche from "../../assets/images/affiche.jpg";
import affiche2 from "../../assets/images/affiche2.jpeg";
import { BsCameraReels, BsIncognito, BsLayers } from "react-icons/bs";

const Body = () => {
  return (
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
                <img
                  src={affiche}
                  class="img-fluid rounded-start"
                  alt="affiche"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
              <div class="col-md-4 d-lg-none d-md-none">
                <img
                  src={affiche2}
                  class="img-fluid rounded-start"
                  alt="affiche"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="col-md-4 d-none d-lg-block d-sm-block">
                <img
                  src={affiche2}
                  class="img-fluid rounded-start"
                  alt="affiche"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
