import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './FindUs.css'
const FindUs = () => (
  <>
    <section className="sect_findUs section__padding">
      <div className="findUs__left flex__center">
         <h4><SubHeading Dta={"Comments"}/></h4>
         <h1 className='headtext__cormorant'>Find Us</h1>
         <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint a aliquam earum laudantium quibusdam temporibus officiis in possimus perspiciatis ratione?</p>
         <h3>Heading Name</h3>
         <p className='para'>Lorem ipsum dolor sit amet consectetur.</p>
         <p className='para'>Lorem ipsum dolor sit amet consectetur.</p>
         <button className='btn'>Find Us</button>
      </div>
      <div className="findUs__right flex__center">
        <img src={images.findus} alt="" />
      </div>

    </section>
  </>
);

export default FindUs;
