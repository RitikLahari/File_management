import React from 'react'
import {Link} from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import { signOutUser } from '../../redux/actionCreator/authActioncreator';




const Navbar = () => {

//get data from redux check the user is login or not 
 const {isAuthenticated,user}=useSelector((state)=>state.auth);
 const dispatch=useDispatch();
  return (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
     <Link className='navbar-brand' to='/'>File mangement system</Link>
  
   <ul className='navbar-nav ms-auto me-5'>
      {  isAuthenticated?(
      <>
        <li className='nav-item mx-4'>
        <p  className='my-0 mt-1 mx-2'>
           <span className='text-light'>Welcome</span>
           <span className='text-light'>{user.displayname}</span>
        </p>
     </li>
         <li className='nav-item mx-4'>
        <Link className='btn btn-primary btn-sm' to='/dashboard'>
            Dashboard
        </Link>
     </li>
     <li className='nav-item'>
        <button className='btn btn-success btn-sm' onClick={()=>dispatch(signOutUser())}>
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

export default Navbar;
  