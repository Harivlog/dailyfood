import React from 'react';
import images from '../../constants/images';
const SubHeading = ({color , Dta}) => (
  <div style={{fontFamily : 'var(font-alt)' , color : {color}}}>
    <h3>{Dta}</h3>
    <img className='spoon__img' src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
