import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to={'/'} className="footer_title mb-2">
        Emoviez
      </Link>
      <div className="footer_content container">
        <div className="made-by">
          <span>MadeBy</span>
          <h4>Eyad Omar</h4>
        </div>
        <div className="contact">
          <p>Feel free to contact me on</p>
          <div className="social">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=01002379226"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="mailto:eiad.omar88@gmail.com">
              <i className="bx bx-envelope"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/EyadOmar"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="tel:+201002379226">
              <i className="bx bxs-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
