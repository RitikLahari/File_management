import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { signInUser } from '../../redux/actionCreator/authActioncreator';
import {toast} from "react-toastify"
const Loginform = () => {

    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');
    const [sucess,setSucess]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();


   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(email,password);
      if(!email || !password)
      {
         toast.error("plz fill the entrys");
         return;
      }
      dispatch(signInUser(email,password,setSucess))
      toast("Login successfull")

   } 
   useEffect(()=>{
      if(sucess){
         navigate("/dashboard");
      }
   },[sucess]);

  return (
   <form onSubmit={handleSubmit}>
         <div className="form-group my-2">
            <input type="text" name='email' 
            className='form-control' placeholder='Email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}/>
         </div>
         <div className="form-group my-2">
            <input type="text" name='password' 
            className='form-control' placeholder='password' 
            value={password} onChange={(e)=> setpassword(e.target.value)}/>
         </div>

         <button type='submit' className='btn btn-primary my-2'>Submit</button>
   </form>
  )
}

export default Loginform
