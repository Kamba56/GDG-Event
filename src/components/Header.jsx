import './styles/header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="container">
    <nav className='inner-container nav'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <a href='#' className='reserve-btn btn'>Reserve a seat</a>
    </nav>
  </header>
);

export default Header;
