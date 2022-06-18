import React from 'react';

import './SpecialMenu.css';
import {images , data } from '../../constants'
import {SubHeading } from '../../components'
const SpecialMenu = () => (
  <>
   <section className="sp__menu-section flex__center section__padding" id='menu'>
       <div className="sp__menu_main-heading">
         <h4>
           <SubHeading Dta="Menu That Fits You Pallatter" color="#fff"/>
         </h4>
           <h1>Today's Special</h1>
       </div>
       <div className='sp__menu-list'>
          <div className='sp__menu-item-details flex-center'>
              <h2>Soft Drinks</h2>
              <ul className='sp__menu_drinks-list'>
                
                  {
                    data.wines.map((e)=>(
                      <li key={e.id}>
                        <div className='sp_menu_drink_list-item '>
                        <h3>{e.title}</h3>
                        <div style={{color : '#fff'}}>______</div>
                        <p>{e.price}</p>

                        </div>
                        <div>
                          <p>{e.tags}</p>
                        </div>
                      </li>
                    ))
                  }
                
              </ul>
          </div>
          <div className='sp__menu-img flex__center'>
            <img src={images.menu} alt="" />
          </div>
          <div className='sp__menu-item-details flex-center'>
              <h2>Cocktails</h2>
              <ul className='sp__menu_drinks-list'>
                
                  {
                    data.cocktails.map((e)=>(
                      <li key={e.id}>
                        <div className='sp_menu_drink_list-item '>
                        <h3>{e.title}</h3>
                        <div style={{color : '#fff'}}>______</div>
                        <p className='para'>{e.price}</p>

                        </div>
                        <div>
                          <p className='para'>{e.tags}</p>
                        </div>
                      </li>
                    ))
                  }
                
              </ul>
          </div>
          
       </div>
       <div className="menu-button">
         <button className='btn'>Details</button>
       </div>
     </section> 
    
  </>
);

export default SpecialMenu;
