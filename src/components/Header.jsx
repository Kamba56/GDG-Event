import './styles/header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="container">
    <nav className='inner-container flex-justify'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <AnchorLink href='#events' id='btn' className='reserve-btn flex-center'>Reserve a seat</AnchorLink>
    </nav>
  </header>
);

export default Header;
