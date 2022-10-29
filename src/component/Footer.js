

import React from "react"
import logo1 from "../component/pic/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container text-center-header top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2022. React js Michel Almont</p>
        </div>
      </footer>
    </>
  )
}

export default Footer