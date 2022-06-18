import React from 'react';
import SubHeading  from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import './Chef.css';

const Chef = () => (
  <>
        <section className="Chef-sitn section__padding" id='chef'>
          <div className="chif_sitn-img">
            <img src={images.chef} alt="Chef img" />  
          </div>
          <div className="chif_sitn-content">
              <h4>
                <SubHeading Dta={"Chefs Word"}/>
              </h4>
              <h1 className='headtext__cormorant'>What we Believe In</h1>
              <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati eos ratione veritatis tenetur dolor dignissimos alias quibusdam architecto itaque nisi animi veniam aliquam corrupti, temporibus incidunt in, officia nostrum laborum. Totam voluptatem, amet a itaque aliquam sequi sapiente fugiat!</p>
               <h2>Hamid Chif</h2>
               <p className='para'>Chef & Founder</p>
                <div className="chif_sign-content-sign">
               <img style={{margintop : '1.2rem'}}  src={images.sign} alt="" />

                </div>

          </div>
        </section>
  </>
);

export default Chef;
