import './styles/header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="container">
    <nav className='inner-container flex-justify'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <a href='#' id='btn' className='reserve-btn flex-center'>Reserve a seat</a>
    </nav>
  </header>
);

export default Header;
