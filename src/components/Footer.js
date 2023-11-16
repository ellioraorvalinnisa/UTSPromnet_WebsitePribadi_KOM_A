import React from 'react';
import whatsAppImage from "./../assets/image/baru/Whatsapp.png"
import instagramImage from "./../assets/image/baru/Instagram.png"
import linkedinImage from "./../assets/image/baru/Linkedin.png"

const Footer = () => {
  return (
    <section class="page-section" id="footer"> 
    <br/>   
    <footer className="footer py-4 bg-success">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">Copyright &copy; Elliora Orva Linnisa</div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="https://wa.me/621322653268" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <img src={whatsAppImage} alt="WhatsApp" width="20" height="20" />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/elliorarvlns" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={instagramImage} alt="Instagram" width="20" height="20" />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/ellioraorvalinnisa" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedinImage} alt="LinkedIn" width="20" height="20" />
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
    </section>

  );
}

export default Footer;
