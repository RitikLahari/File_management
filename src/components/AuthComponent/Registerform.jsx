import React from 'react';
import { useState,useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actionCreator/authActioncreator';
import { toast } from 'react-toastify';

const Registerform = () => {  
    const [name,setName]=useState(''); 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
    const dispatch=useDispatch();
  

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name || !email || !password || !cpassword){
         toast.error("fill all detail");
         return;
      }
      if(password !==cpassword){
         toast.error("password do not match");
         return;
      }
      dispatch(signUpUser(name,email,password));
      toast("register successfully");
   }
  



  return (
   <form onSubmit={handleSubmit}>
         <div className="form-group my-2">
            <input type="text" name='name' 
            className='form-control' placeholder='name'
            value={name} 
            onChange={(e)=> setName(e.target.value)}/>
         </div>
         <div className="form-group my-2">
            <input type="text" name='email' 
            className='form-control' placeholder='Email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}/>
         </div>
         <div className="form-group my-2">
            <input type="text" name='password' 
            className='form-control' placeholder='password' 
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
         </div>
         <div className="form-group my-2">
            <input type="text" name='cpassword' 
            className='form-control' placeholder='cpassword' 
            value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/>
         </div>

         <button type='submit' className='btn btn-primary my-2'>Submit</button>
   </form>
  )
}

export default Registerform
