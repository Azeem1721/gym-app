import React from 'react'
import"./Footer.css"
import Gym1 from"../Images/Gym1.png"

const Footer = () => {
  return (
    <div className='Footer'>
        <hr />
        <div className="footer-icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <img className='footer-img' src={Gym1} alt="" />

        <div className="blurs footer-blur-1"></div>
        <div className="blurs footer-blur-2"></div>

    </div>
  )
}

export default Footer

