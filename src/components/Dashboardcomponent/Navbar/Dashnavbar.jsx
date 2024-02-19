import React from 'react'
import "./Dashnavbar.css"
import {Link} from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import { signOutUser } from '../../../redux/actionCreator/authActioncreator';





const Dashnavbar = () => {

//get data from redux check the user is login or not 
 const {isAuthenticated,user}=useSelector((state)=>state.auth);
 const dispatch=useDispatch();
  return (
  <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-mb p-3'>
     <Link className='navbar-brand' to='/dashboard'>File mangement system</Link>
  
   <ul className='navbar-nav ms-auto me-5'>
      {  isAuthenticated?(
      <>
        <li className='nav-item mx-4'>
        <p  className='my-0 mt-1 mx-2'>
           <span className='text-dark'>Welcome</span>
           <span className='text-light'>{user.displayname}</span>
        </p>
     </li>
         <li className='nav-item mx-4'>
        <Link className='btn btn-primary ' to='/'>
            Home
        </Link>
     </li>
     <li className='nav-item'>
        <button className='btn btn-success btn-sm' onClick={()=>dispatch(signOutUser)}>
             Logout
        </button>
     </li>
        </>
      )
       :
        (
        
        <>
         <li className='nav-item mx-4'>
        <Link className='btn btn-primary btn-sm' to='/login'>
            Login
        </Link>
     </li>
     <li className='nav-item'>
        <Link className='btn btn-success btn-sm' to='/Register'>
            Register
        </Link>
     </li>
        </>
        
        )

      }
    
   </ul>
  
  
  </nav> 
  )
}

export default Dashnavbar;
  