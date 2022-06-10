import React , {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images'
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
 const [toggleNav, setToggleNav] = useState(false)
  return(
    
  <nav className='nav-wrapper '>
    <div className='nav__rap'>
       <div className="nav_logo">
         <img src={images.gericht} alt="logo-foodwebsite" />
       </div>
       <ul className="nav_menu flex__center">
           <li className='p__opensans'><Link to="/">Home</Link></li>
           <li className='p__opensans'><Link to="/about">About</Link></li>
           <li className='p__opensans'><Link to="menu">Menu</Link></li>
          
           <li className='p__opensans'><Link to="/gallery">Gallery</Link></li>
           <li className='p__opensans'><Link to="intro">Intro</Link></li>
           <li className='p__opensans'><Link to="chef">Chef</Link></li>
           
           <li className='p__opensans'><Link to="laurels">Laurels</Link></li>
       </ul>
       <ul className=" flex__center nav_login_wrap">
          <li><Link  to="">Login Registration</Link></li>
          <li><div style={{color : 'white'}}>|</div></li>
          <li><Link  to="">Book Table</Link></li>
       </ul>
       <div className='app__navbar_smallscreen' >
         <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> {setToggleNav(true)}}></GiHamburgerMenu>

         {
           toggleNav && (
           <div className='app__navbar_smallscreen_overlay flex__center slide_bottom'>
           <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=> {setToggleNav(false)}}/>
         <ul className="app__navbar_smallscreen-link">
           <li className='p__opensans'><Link to="">Home</Link></li>
           <li className='p__opensans'><Link to="">Pages</Link></li>
           <li className='p__opensans'><Link to="">Contact us</Link></li>
           <li className='p__opensans'><Link to="">Blog</Link></li>
           <li className='p__opensans'><Link to="">Laurels</Link></li>
       </ul>
         </div>)
         }
       </div>
    </div>
  </nav>
);
  }
export default Navbar;
