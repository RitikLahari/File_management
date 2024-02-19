import React from 'react'
import { Navigation } from '../../components/homecomponent/index'
import vg from "../../Assets/dashhome.jpg"
import "./HomePage.css"
const Homepage = () => {
  return (
   <>
     <Navigation/>
     <h1 className='display-1 my-5 text-center bg-light'>Welcome</h1>
     <div className='dashimg'>
          <img src={vg} alt='image'/>
     </div>
   </>
  )
}

export default Homepage;
