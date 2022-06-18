import React from 'react';

import './AboutUs.css';
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';
const AboutUs = () => (
  <>
    <section className="section__padding about-sct" style={{backgroundImage : `url(${images.G})` , backgroundRepeat : 'no-repeat'}} id="about">
           
          <div className='about-sec-us'>
          <h4>
          <SubHeading Dta="About Us"/>

          </h4>
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorum? Neque error sint sequi, saepe commodi ad tenetur dicta nesciunt modi dignissimos iste, dolores corporis quo esse et at nulla!</p>
             <div>
             <button  className='btn'>Select</button>

             </div>
           </div>
           <div className="about-sec-knife">
             <img className='about-sec-img ' src={images.knife} alt="" />
           </div>
           <div className='about-sec-history'>
             <h4 className='about-sec-history-heading'>
           <SubHeading Dta="Our History" color="#fff"/>

             </h4>
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorum? Neque error sint sequi, saepe commodi ad tenetur dicta nesciunt modi dignissimos iste, dolores corporis quo esse et at nulla!</p>
             <div>
             <button  className='btn'>Select</button>
             </div>
           </div>
    </section> 
  </>
);

export default AboutUs;
