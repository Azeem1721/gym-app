import React from 'react'
import"./Programs.css"
import { programsData } from '../../ProgramsData/ProgramsData'



const Programs = () => {
  return (
    <div className='Programs' id='Programs'>

    <div className="programsHeader">
        <span className='strokeText'>Explore Our</span>
        <span>Programs</span>
        <span className='strokeText'>To Shape You!</span>
    </div>

    <div className="programCategories">

        {programsData.map((program)=>(
            <div className="category">
                <div className='programimage'>
                    {program.image}
                    </div>
                <span className='programHeading'>{program.heading} </span>
                <span className='programDetails'>{program.details}</span>
                
                <div className='ProgramButton'>
                {program.button}
                <i className="fa-solid fa-arrow-right"></i>
                </div>

          

            </div>
        ))}
    </div>
      
    </div>
  )
}

export default Programs
