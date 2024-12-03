import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mx-auto flex bg-gray-400 justify-between items-start p-4">
      <div className="flex-row max-w-7xl mx-auto my-auto">
        <h3 className="text-lg font-bold">Contact Us</h3>
        <div className="flex space-x-4 mt-4">
          <Link to="#">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
