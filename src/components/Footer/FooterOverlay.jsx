import React from 'react';
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';
import './FooterOverlay.css';
import {FiInstagram , FiFacebook , FiTwitter} from 'react-icons/fi'
// import {FiFacebook , FiInstagram , FiTwitter} from 'react-icons/fi'
const FooterOverlay = () => (
  < >
    <section className='footer__overlay-wrap '>
       <div className="footer__overlay-content">
       <div className="footer__overlay-left flex__center">
          <h2>Connect us</h2>
          <p className='para'>Lorem ipsum dolor sit amet consectetur.</p>
          <p className='para'>+923176102251</p>
          <p className='para'>+923098024059</p>
        </div>
        <div className="footer__overlay-center flex__center">
           <div className="footer__overlay-center-img">
             <img src={images.gericht} alt="website logo" />

           </div>
           <div className="footer__overlay-center-socialBox flex__center">
           <p className='para'>Lorem ipsum adipisicing elit. Cum earum hic cumque voluptas accusamus?</p>
             <img src={images.spoon} alt="spoon image" />
             <div className="social-icons">
               <FiFacebook />
               <FiInstagram/>
               <FiTwitter/>
             </div>
             </div>           
        </div>
        <div className="footer__overlay-right flex__center">
          <h2>Working Hours</h2>
          <div className="">
            <p className='para'>Monday-Friday</p>
            <p className='para'>08:am-12:00am</p>
          </div>
          <div className="">
            <p className='para'>Saturday-Sunday</p>
            <p className='para'>07:am-8:00pm</p>
          </div>
        </div>
       </div>
       <div className="">
         <div className="Footer__copy-right flex__center">
           <p className="para">
           2021-All right Reserved GERICHT

           </p>
         </div>
       </div>
    </section>
  </>
);

export default FooterOverlay;
