import { useEffect, useState } from "react";
import Navbar from "../Navbar/Index";
import "../../assets/css/contact.css";
import contact from "../../assets/images/contact-img.jpg";
import Footer from "../Footer/Index";

const Contact = () => {
  const [contactMount, setContactMount] = useState(false);

  useEffect(() => {
    setContactMount(true);

    return () => setContactMount(false);
  }, []);

  return (
    <>
      <Navbar contactMount={contactMount} />
      <div className="container-fluid container-contact contact_section">
        <div class="container">
          <div class="heading_container">
            <h2 className="text-center">Let's Get In Touch!</h2>
          </div>
          <div class="container contact_bg layout_padding2-top">
            <div class="row">
              <div class="col-md-6">
                <div class="contact_form ">
                  <form action="">
                    <input type="text" placeholder="Name " />
                    <input type="email" placeholder="Email" />
                    <input
                      type="text"
                      placeholder="Message"
                      class="message_input"
                    />
                    <button>Send</button>
                  </form>
                </div>
              </div>
              <div class="col-md-6 d-none d-lg-block d-md-block">
                <div class="img-box">
                  <img src={contact} alt="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
