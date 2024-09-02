import React from 'react'
import"./Reasons.css"
import Gym6 from"../Images/Gym6.png"
import Gym7 from"../Images/Gym7.png"
import Gym8 from"../Images/Gym8.png"
import Gym9 from"../Images/Gym9.png"
import Gym10 from"../Images/Gym10.png"
import Gym14 from"../Images/Gym14.png"
import Gym15 from"../Images/Gym15.png"
import Gym16 from"../Images/Gym16.png"





const Reason = () => {
  return (
    <div className='Reasons'>
        <div className="blurs hero-blur"></div>
      <div className="leftR">
        <img src={Gym6} alt="" />
        <img src={Gym7} alt="" />
        <img src={Gym15} alt="" />
        <img src={Gym16} alt="" />
      </div>

      <div className="rightR">
        <span>Some Reasons</span>

        <div className="reasonsText">
          <span className='strokeText'>Why </span>
          <span>Choose Us?</span>
        </div>

      <div className="rightDetails">
        <div><img src={Gym10} alt="" /><span>OVER 140+ EXPERT COACHS</span></div>
        <div><img src={Gym10} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
        <div><img src={Gym10} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
        <div><img src={Gym10} alt="" /><span>RELIABLE PARTNERS</span></div>

      </div>
      <span id="ourPartners">Our Partners</span>

        <div className="partners">
          <img src={Gym8} alt="" />
          <img src={Gym9} alt="" />
          <img src={Gym14} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Reason
