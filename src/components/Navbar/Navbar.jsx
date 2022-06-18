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
           <li className='p__opensans'><a href="#home">Home</a></li>
           <li className='p__opensans'><a href="#about">About</a></li>
           <li className='p__opensans'><a href="#menu">Menu</a></li>
          
           <li className='p__opensans'><a href="#gallery">Gallery</a></li>
           <li className='p__opensans'><a href="#intro">Intro</a></li>
           <li className='p__opensans'><a href="#chef">Chef</a></li>
           
           <li className='p__opensans'><a href="#laurels">Laurels</a></li>
       </ul>
       <ul className=" flex__center nav_login_wrap">
          <li><a  href="">Login Registration</a></li>
          <li><div style={{color : 'white'}}>|</div></li>
          <li><a  href="">Book Table</a></li>
       </ul>
       <div className='app__navbar_smallscreen' >
         <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> {setToggleNav(true)}}></GiHamburgerMenu>

         {
           toggleNav && (
           <div className='app__navbar_smallscreen_overlay flex__center slide_bottom'>
           <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=> {setToggleNav(false)}}/>
         <ul className="app__navbar_smallscreen-link" onClick={()=> setToggleNav(false)}>
         <li className='p__opensans'><a href="#home">Home</a></li>
           <li className='p__opensans'><a href="#about">About</a></li>
           <li className='p__opensans'><a href="#menu">Menu</a></li>
          
           <li className='p__opensans'><a href="#gallery">Gallery</a></li>
           <li className='p__opensans'><a href="#intro">Intro</a></li>
           <li className='p__opensans'><a href="#chef">Chef</a></li>
           
           <li className='p__opensans'><a href="#laurels">Laurels</a></li>
       </ul>
         </div>)
         }
       </div>
    </div>
  </nav>
);
  }
export default Navbar;
