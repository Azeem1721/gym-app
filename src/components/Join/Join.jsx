import React from 'react'
import"./Join.css"
// import emailjs from "@emailjs/browser";

// const form = useRef();

const Join = () => {
  return (
    <div className='join-container'>
      
      <div className="left-join">
        <hr />
        <div>
        <span className='strokeText'>READY TO </span>
        <span>LEVEL UP</span>
        </div>

        <div>
        <span>YOUR BODY </span>
        <span className='strokeText'>WITH US?</span>
        </div>
      </div>


      <div className="right-join">

        <form className="email-container">
            <input type="email" name="user_email" placeholder="Enter Your Email" />
            <button className='Join-btn'>Join Now</button>
        </form>

      </div>

    </div>
  )
}

export default Join
