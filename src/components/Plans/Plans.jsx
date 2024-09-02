import React from 'react'
import"./Plans.css"
import { PlanssData } from '../../ProgramsData/Plansdata'
import Gym14 from "../Images/Gym14.png"

function Plans() {
  return (
    <div className='OurPlans'>

      <div className="blurs plansblur-1"></div>
      <div className="blurs plansblur-2"></div>

      <div className="plansheader">
        <span className='strokeText'>READY TO START </span>
        <span>YOUR JOURNEY </span>
        <span className='strokeText'>NOW WITHUS</span>
      </div>

        <div className="plans">

            {PlanssData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.image}
                    <span>{plan.heading}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                    {plan.features.map((feature, i)=>(
                        <div className="feature">
                            <img src={Gym14} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}

            </div>

                    <div ><span>See more benifits </span>
                    <i className="fa-solid fa-arrow-right rightArrow"></i>
                    </div>
                    <button className='plansbutton'>Join Now</button>

                </div>

                
            ))}

            

        </div>


    </div>
  )
}

export default Plans
