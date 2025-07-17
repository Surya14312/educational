import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>The Sanvi’s Abroad Xperts</h4>
          <p>
            <FaEnvelope /> sanviinfolinksystem@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> +91 9966428787
          </p>
          <p>
            <FaWhatsapp /> +91 9966428787
          </p>
          <p>
            <FaMapMarkerAlt /> A23, Basement Floor, Parsn Commercial Complex,
            <br />
            Nungambakkam, Chennai - 600034
          </p>
        </div>

        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/TheSanvis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sanvioverseas/reels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sanvi-infolink-system/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/919966428787"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 The Sanvi’s Abroad Xperts. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
