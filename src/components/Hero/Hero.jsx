// import React from 'react'
// import "./Hero.css"
// import Header from "../Header/Header.jsx"

// import {motion} from "framer-motion";

// const Hero = () => {
//   return (
//     <div>
//             <div className="hero">
//                 <div className="left-hero">
//                     <Header />


//                 </div>
//                 <div className="right-hero">Right</div>


//                 <div className="bestAd">
//              <motion.div

//           initial = {{left: '238px'}}
//           whileInView={{left: '13px'}}
//           transition={{...transition, type: 'tween'}}

//             ></motion.div>
//             <span>The best fitness club in the town!</span>
//           </div>


//             </div>

//     </div>
//   )
// }

// export default Hero





import Header from "../Header/Header"
import "./Hero.css"
import Gym2 from "../Images/Gym2.png"
import Gym3 from "../Images/Gym3.png"
import Gym4 from "../Images/Gym4.png"
import Gym5 from "../Images/Gym5.png"

import {motion} from "framer-motion";

const Hero = () => {

  const transition = {type: 'spring', duration: 2}

  return (
    <div>
      <div className="hero">
        
        <div className="blurs hero-blur"></div>

        <div className="heroLeft">
          <Header />

          <div className="bestAd">
            <motion.div

          initial = {{left: '238px'}}
          whileInView={{left: '13px'}}
          transition={{...transition, type: 'tween'}}

            ></motion.div>
            <span>The best fitness club in the town!</span>
          </div>

          <div className="heroText">
            <div>
              <span className="strokeText">Shape </span>
              <span>Your</span>
            </div>
            <div><span>Ideal Body</span></div>

            <div className="smallText"><span>In here we will help you to maintain your body and build an attractive body.
            </span></div>
          </div>

          <div className="figures">

            <div>
              <span>+100</span>
              <span>Export Coaches</span>
            </div>
            <div>
              <span>+1000</span>
              <span>Members Joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>Fitness Program</span>
            </div>

          </div>

          <div className="heroButtons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>

        </div>


        

        <div className="heroRight">

          
          <div className="rightbtn">
            <span>Login</span>
            <span><button className="btn2">Sign Up</button></span>
          </div>

          <motion.div 
          
          initial={{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
          
          
          className="heartImage">
            <img src={Gym4} alt="" />
            <span>Heart Rate</span>
            <span className="span1">116bpm</span>
          </motion.div>




          <img src={Gym2} alt="" className="herogym2" />



          <motion.img 
          
          initial={{right: '5rem'}}
          whileInView={{right: '15rem'}}
          transition={transition}
          
          src={Gym3} alt="" className="herogym3" />

        </div>

        <motion.div 
        
        initial={{top: "20rem"}}
        whileInView={{top: "30rem"}}
        transition={transition}
        
        className="calories">
          <img src={Gym5} alt="" />
          <div className="caloriesSpan">
          <span className="span3">Calories Burned</span>
          <span className="span4">220 kcal </span>
          </div>
        </motion.div>

      </div>


</div>



  )
}

export default Hero
