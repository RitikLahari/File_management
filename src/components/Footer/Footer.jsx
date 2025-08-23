import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'
import img from "../../Assets/img_footer.png"

const Footer = () => {
  return (
    <>
    <div className=' h-1/2 w-full bg-white '>
       <div className='heading'>
            Follow me 
       </div>
        <div className='link'>
           
            <a href='https://in.linkedin.com/in/ritik-lahari-267213254'>< FaInstagramSquare/></a>
            <a href='https://in.linkedin.com/in/ritik-lahari-267213254'><FaLinkedin /></a>
        </div>
       <div className='content'>
          <p>File Management System </p>
          <p> @ copyright 3002 : all right reserve</p>  
       </div>
    </div>

    </>
  )
}

export default Footer