import React from 'react';

import './Header.css';
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';
const Header = () => (
  <>
    <section className="section__header section__padding" id='header'>
        <div className='section__header_content'>
          <h4><SubHeading Dta="Chase the New Flavour" color=""/></h4>          
          <h1>
            The Key to Fine Dining
          </h1>
          <p className='para'>
            Lorem ipsum dolor sit amet, cupiditate deserunt earum culpa eligendi libero exercitationem quam laboriosam repudiandae reiciendis rerum iste sint, officiis deleniti voluptatem at natus laudantium?
          </p>
          <button className='btn'><a href="#">Explore Menu</a></button>
        </div>
        <div className='section__header_img flex__center'>
          <img src={images.welcome} alt="HeaderImage" />
        </div>

    </section>
    
  </>
);

export default Header;
