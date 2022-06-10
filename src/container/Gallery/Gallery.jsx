import React, { useRef } from 'react';
import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import {BsInstagram ,BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';
const image = [images.gallery01 ,images.gallery02 ,images.gallery03 ,images.gallery04]
const Gallery = () => {
  const scroll =(direction)=>{
      const {current} = scrollRef

      if(direction === 'left'){
        current.scrollLeft -=300; 
      }
      else{
        current.scrollLeft +=300; 

      }
  }
  const scrollRef = useRef(null)
  return(
  <>
    <section className='app__gallery flex__center'>
      <div className="app__gallery-content">
         <h4> <SubHeading Dta={"Instagram"}/></h4>
         <h1 className='headtext__cormorant'>Photo Gallery</h1>
         <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus! adipisicing elit. Sit, doloribus!</p>
         <button type='button' className='btn'>View More</button>
      </div>
      <div className="app_gallery-images">
         <div className="app_gallery_images-container" ref={scrollRef}>
            {
              image.map((e , index) => (
                <div className='app_gallery_images-card flex__center' key={`gallery-images-${index + 1}`}>
                  <img src={e} alt="" />
                  <BsInstagram className='gallery-image-icon'/>
                </div>
              ))
            }
            <div className="app_gallery_images-arrow">
              <BsArrowLeftShort className='gallery_arrow-icon' onClick={()=> scroll('left')}/>
              <BsArrowRightShort className='gallery_arrow-icon' onClick={()=> scroll('right')}/>

            </div>
         </div>
      </div>
      </section>   
  </>
  )
};

export default Gallery;
