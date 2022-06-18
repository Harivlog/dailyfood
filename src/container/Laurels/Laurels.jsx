import React from 'react';
import{ images ,data} from '../../constants'
import Subheading from '../../components/SubHeading/SubHeading'
import './Laurels.css';

const Laurels = () => (
  <>
     <section className="section__padding laurels_sect" id='laurels'>
       
                            <div className="lau_sect_cnt-leftBx ">
                   <h4>
                     <Subheading Dta={"Awards & Reengnation"}/>
                   </h4>
                    <h1 className='headtext__cormorant'>Our Laurels</h1>
                    <div className="lau_sect_cnt_leftBx-Awards">
                        {
                          data.awards.map((e) => (
                            <li key={e.id} className="flex__center">
                               <div className='lau_sect_cnt_leftBx_Awards-img'><img src={e.imgUrl} alt="" /></div>
                               <div className='awards-list-text'>
                                 <h2 style={{color : 'var(--color-golden)'}} >{e.title}</h2>
                                 <p className='para'>{e.subtitle}</p>
                               </div>
                            </li>
                          ))
                        }
                    </div>
                </div>
                <div className="lau_sect_cnt-rightBx flex__center">
                   <img src={images.laurels} alt="" />
                </div>

            
     </section> 
  </>
);

export default Laurels;
