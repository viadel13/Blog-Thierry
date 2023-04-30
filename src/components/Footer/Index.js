import call from "../../assets/images/call.png";
import call2 from "../../assets/images/call-o.png";
import envelope from "../../assets/images/envelope.png";
import envelope2 from "../../assets/images/envelope-o.png";
import whatsapp from "../../assets/images/whatsapp.png";
import whatsapp2 from "../../assets/images/whatsapp2.png";
import "../../assets/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="info_section layout_padding">
        <div className="footer_contact">
          <div className="heading_container">
            <h2>Contact Us</h2>
          </div>
          <div className="box">
            <Link to="/" className="img-box">
              <img src={call} alt="call" className="img-1" />
              <img src={call2} alt="call2" className="img-2" />
            </Link>
            <Link to="/" className="img-box">
              <img src={envelope} alt="envelope" className="img-1" />
              <img src={envelope2} alt="" className="img-2" />
            </Link>
            <Link to="/" className="img-box">
              <img src={whatsapp} width={50} height={45} alt="whatsapp" className="img-1" />
              <img src={whatsapp2} width={50} height={45}  alt="whatsapp2" className="img-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>
          Copyright &copy; 2023 All Rights Reserved By
          Dvpro
        </p>
      </section>
    </>
  );
};

export default Footer;
