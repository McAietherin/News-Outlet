import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import logo_inv from './assets/logo_inv.png'
import Body from './Body'
import { Link, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/highlights', label: 'Highlights' },
    { to: '/recent', label: 'Recent' },
    { to: '/international', label: 'International' },
    { to: '/political', label: 'Political' },
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
          <div id='banner'>
            <img src={banner} alt="banner" />
          </div>
        </div>
      </header>
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
            <div id='logi'>
              <img src={logo_inv} alt="inverted logo" />
            </div>
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
