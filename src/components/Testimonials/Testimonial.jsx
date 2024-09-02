import React, { useState } from 'react'
import"./Testimonial.css"
import { TestimonialsData } from '../../ProgramsData/Testimonials'

import { motion } from 'framer-motion'


function Testimonials() {

const transition = {type: 'spring', duration: 3}

const [selected, setSelected] = useState(0);
const Tlenght = TestimonialsData.length;

  return (
    <div className='testimonials-container'>
      <div className="testimonials-left">
            <span>Testimonials</span>
            <span className='strokeText'>WHAT THEY</span>
            <span>SAY ABOUT US</span>

            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
            
            >{TestimonialsData[selected].review}</motion.span>
            <span>
              
            <span style={{color : "orange"}}>{TestimonialsData[selected].name}</span> {""}
             -- {TestimonialsData[selected].status}
            </span>


      </div>

      <div className="testimonials-right">

        <motion.div
        
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, duration: 2}}

        ></motion.div>

        <motion.div
        
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, duration: 2}}

        
        ></motion.div>

      <motion.img
      key={selected}
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{...transition, duration: 2}}
      
      src={TestimonialsData[selected].image  } alt="" />

      <div className="arrows">
      <i 
        onClick={()=>{
          selected===0 ? setSelected(Tlenght - 1)
          : setSelected((prev)=> prev-1)
        }}
      
      class="fa-solid fa-arrow-left"></i>
      <i 
      
      onClick={()=>{
        selected=== Tlenght - 1 ? setSelected(0)
        : setSelected((prev)=> prev+1)
        
      }}
      
      
      class="fa-solid fa-arrow-right"></i>
      </div>

      </div>

    </div>
  )
}

export default Testimonials
