import React from 'react'
import "./Header.css"


import Logo from "../Images/Gym1.png"

const Header = () => {
  return (
      <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
        
<div className="newtext">
  <h2>MyFitnessClub</h2>
</div>
      </div>



  )
}

export default Header






// import React from 'react'
// import"./Header.css"
// import Gym1 from "../Images/Gym1.png"

// const Header = () => {
//   return (
//     <div>
//         <div className="header">

//       <img src={Gym1} className='logo1' />

//       <div className="menu">
        
//         <ul>
//             <li>Home</li>
//             <li>Programs</li>
//             <li>Why US?</li>
//             <li>Plans</li>
//             <li>Testimonials</li>
//         </ul>
//       </div>

//         </div>
//     </div>
//   )
// }

// export default Header









