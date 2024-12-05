import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import reactLogo from '../assets/react.svg';
import { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // On page load, check localStorage for the isConnected status
    const connected = localStorage.getItem('isConnected');
    if (connected === 'true') {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove the 'isConnected' from localStorage
    localStorage.removeItem('isConnected');
    setIsConnected(false); // Update state to reflect that the user is logged out
    navigate('/sign-in'); // Navigate to the sign-in page
  };

  return (
    <header>
      <nav className="  bg-gray-400 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/home" className="text-2xl font-bold">
            <img src={reactLogo}></img>
          </Link>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
          </button>
          <div
            className={`flex-col md:flex md:flex-row ${navOpen ? 'flex' : 'hidden'} md:flex`}
          >
            {isConnected ? (
              <div>
                <Link to="/settings" className="p-2 px-4">
                  Settings
                </Link>
                <button className="p-2 px-4" onClick={handleLogout}>
                  Disconnect
                </button>
              </div>
            ) : (
              <div>
                <Link to="/sign-in" className="p-4">
                  Connexion
                </Link>
                <Link to="/sign-up" className="p-2 px-4">
                  <button className="text-black px-4 py-2 rounded">
                    Inscription
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
