import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <>
  <section className="section__padding  newsLetter flex__center">
       <div className="newsLetter__wrapper">
      <h4>
      <SubHeading Dta={"Newsletter"}/>

      </h4>
      <h1 className='headtext__cormorant'>Subscribe our Newsletter</h1>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className='news__letter-input'>
        <input type="text" placeholder='Write your text here' />
        <button type='button' className='btn'>Subscribe</button>
      </div>
       </div>

  </section>
    
  </>
);

export default Newsletter;
