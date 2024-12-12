import React from 'react'
import { Navigation } from '../../components/homecomponent/index'
import vg from "../../Assets/dashhome.jpg"
import v1 from "../../Assets/file.jpg"
import v2 from "../../Assets/folder2.jpg"
import v3 from "../../Assets/upload.png"
import "./HomePage.css"
const Homepage = () => {
  return (
   <>
     <Navigation/>
     <div className='style'>
     <h1 className='display-1 my-5 text-center bg-light'>Welcome</h1>
     </div>
     <div className='B'>
        <div className='jk'> Key Feature  </div>
        <div className='front'>
           <div className='A'>
                <span className='D'>Folder Making </span>
                <img src={v2} alt='img' className='C'></img>
           </div>
           <div className='A'>
                <span  className='D'>File Making </span>
                <img src={v1} alt='img'  className='C'></img>
           </div>
           <div className='A'>
                <span  className='D'>Upload Files </span>
                <img src={v3} alt='img'  className='C'></img>
           </div>
        </div>
     </div>
   </>
  )
}

export default Homepage;
