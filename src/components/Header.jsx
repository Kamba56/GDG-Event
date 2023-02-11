import './component_css/header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="container">
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
    </div>

    <a href='#' className='reserve-btn btn'>Reserve a seat</a>
  </header>
);

export default Header;
