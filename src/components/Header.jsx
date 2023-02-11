import './component_css/header.css';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="container">
    <div className='logo'>
      <img src={logo} alt="logo" />
    </div>

    <a href='#' className='reserve-btn btn'>Reserve a seat</a>
  </header>
);

export default Header;
