import React from 'react'
import { Navigation } from '../../components/homecomponent/index'
import vg from "../../Assets/dashhome.jpg"
import v1 from "../../Assets/file.jpg"
import v2 from "../../Assets/folder2.jpg"
import v3 from "../../Assets/upload.png"
import "./HomePage.css"
import HeroSection from '../../components/homecomponent/HeroSection'
const Homepage = () => {
  return (
   <>
     <Navigation/>
     <HeroSection/>

   </>
  )
}

export default Homepage;
