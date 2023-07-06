import { useState } from 'react';
import logo from '../../assets/Home/Home/logo.jpg';
import Navlink from './Navlink';
import { Link } from 'react-router-dom';
import '../../css/Navbar/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <div className="wrapper">
        <Link to="/" className="left">
          <img className='logo-img' src={logo} alt="Logo" />
        </Link>
        <div
          className='medium'
        >
          <Navlink to='/'>Home</Navlink>
          <Navlink to='/products'>Products</Navlink>
          <Navlink to='/programs'>Programs</Navlink>
          <Navlink to='/contactus'>Contact us</Navlink>
        </div>
        <div className='last'>
            {isMenuOpen ? (
                <CloseIcon fontSize="large" className='close-icon' onClick={handleMenuToggle} />
            ) : (
                <MenuIcon fontSize="large" className='menu-icon' onClick={handleMenuToggle} />
            )}
        </div>
      </div>
      <div className={`nav_responsive ${isMenuOpen ? 'nav-open' : 'nav-closed'}`}>
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/products'>Products</Navlink>
        <Navlink to='/programs'>Programs</Navlink>
        <Navlink to='/contactus'>Contact us</Navlink>
      </div>
    </div>
  );
}

export default Navbar;
