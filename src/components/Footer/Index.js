import call from "../../assets/images/call.png";
import envelope from "../../assets/images/envelope.png";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <section class="info_section layout_padding">
        <div class="footer_contact">
          <div class="heading_container">
            <h2>Contact Us</h2>
          </div>
          <div class="box">
            <a href="" class="img-box">
              <img src={call} alt="call" class="img-1" />
              {/* <img src="images/call-o.png" alt="call" class="img-2" /> */}
            </a>
            <a href="" class="img-box">
              <img src={envelope} alt="envelope" class="img-1" />
              {/* <img src="images/envelope-o.png" alt="" class="img-2" /> */}
            </a>
            <a href="" class="img-box">
              <img src={envelope} alt="envelope" class="img-1" />
              {/* <img src="images/envelope-o.png" alt="" class="img-2" /> */}
            </a>
          </div>
        </div>
      </section>

      <section class="container-fluid footer_section">
        <p>
          Copyright &copy; 2023 All Rights Reserved By
          <a href="https://html.design/"> Dvpro</a>
        </p>
      </section>
    </>
  );
};

export default Footer;
