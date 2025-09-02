import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import logo_inv from './assets/logo_inv.png'
import Body from './Body'
import { Link, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [moved, setMoved] = useState(false)
  const mennavsRef = useRef(null)
  const location = useLocation()
  const handleMenuClick = () => {
    setMoved(true);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mennavsRef.current && !mennavsRef.current.contains(event.target)) {
        setMoved(false);
      }
    };

    if (moved) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moved]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/highlights', label: 'Highlights' },
    { to: '/recent', label: 'Recent' },
    { to: '/international', label: 'International' },
    { to: '/technology', label: 'Technology' },
    { to: '/finance', label: 'Finance' },
    { to: '/sports', label: 'Sports' },
  ];
  return (
    <>
      <header>
        <div className="cont">
          <Link to={'/'}><div id='logo'>
            <img src={logo} alt="logo" />
          </div></Link>
          <Link to={'/'} id='randoguy'><div id='banner'>
            <img src={banner} alt="banner" />
          </div></Link>
          <div id='menu' onClick={handleMenuClick}>
            <div id='menicons'><i class="bi bi-list thing"></i></div>
          </div>
        </div>
      </header>
      <div id='mennavs' ref={mennavsRef}
        style={{
          transition: "right 0.6s ease",
          right: moved ? "0px" : "-297px"
        }}
      >
        <ul>
          {navLinks.map(link => (
            <li
              key={link.to}
              className={location.pathname === link.to ? 'slcted' : ''}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <div className='cont2'>
          <ul>
            {navLinks.map(link => (
              <li
                key={link.to}
                className={location.pathname === link.to ? 'slcted' : ''}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div id='test'>
        <Body />
        <div id='footer'>
          <div className="cont3">
            <Link to={'/'}><div id='logi'>
              <img src={logo_inv} alt="inverted logo" />
            </div></Link>
            <div className='cent'>
              <div className='ceng'>
                <p>Follow us on</p>
                <div id='icons'>
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-twitter-x"></i>
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </div>
            <div className='cent'>
              <div className='ceng'>
                <p>Address:</p>
                <ul>
                  <li>Random, Kathmandu</li>
                  <li>9876543210</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
