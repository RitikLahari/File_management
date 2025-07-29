import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from '../../redux/actionCreator/authActioncreator';
import { toast } from "react-toastify";
import { FaUserAlt, FaLock } from 'react-icons/fa';
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
         toast.warn("plz fill the entrys");
         return;
      }
      dispatch(signInUser(email,password,setSucess))
       
   } 
   useEffect(()=>{
      if(sucess){
         toast.success("Login successfully");
         navigate("/");

      }
   },[sucess]);

  return (
    <div style={{ minHeight: '80vh', width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)' }}>
      <div style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', padding: '2.5rem 2rem', width: '100%', maxWidth: '370px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#3b82f6', fontWeight: 700, letterSpacing: '1px' }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3" style={{ position: 'relative' }}>
            <FaUserAlt style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a5b4fc' }} />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="username"
            />
          </div>
          <div className="form-group my-3" style={{ position: 'relative' }}>
            <FaLock style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a5b4fc' }} />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-2"
            style={{ width: '100%', borderRadius: '0.75rem', background: 'linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)', border: 'none', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 2px 8px 0 rgba(59, 130, 246, 0.10)' }}
          >
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.2rem', color: '#64748b', fontSize: '0.97rem' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 500 }}>Register</a>
        </div>
      </div>
    </div>
  );
}

export default Loginform
