import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to={'/'} className="footer_title mb-2">
        Emoviez
      </Link>
      <div className="footer_content container">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/'}>Contact us</Link>
          </li>
          <li>
            <Link to={'/'}>Terms of services</Link>
          </li>
          <li>
            <Link to={'/'}>About us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'/'}>Live</Link>
          </li>
          <li>
            <Link to={'/'}>FAQ</Link>
          </li>
          <li>
            <Link to={'/'}>Premium</Link>
          </li>
          <li>
            <Link to={'/'}>Privacy policy</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'/'}>You must watch</Link>
          </li>
          <li>
            <Link to={'/'}>Recent releases</Link>
          </li>
          <li>
            <Link to={'/'}>Top IMDB</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
