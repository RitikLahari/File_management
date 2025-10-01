import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actionCreator/authActioncreator';
import { toast } from 'react-toastify';
import { FaUserAlt, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';

const Registerform = () => {  
    const [name,setName]=useState(''); 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
    const dispatch=useDispatch();
    const [sucess,setSucess]=useState(false);
   const navigate = useNavigate();

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name || !email || !password || !cpassword){
         toast.warn("fill all detail");
         return;
      }
      if(password !==cpassword){
         toast.warn("password do not match");
         return;
      }
      dispatch(signUpUser(name,email,password,setSucess));
      
       
   }

    useEffect(()=>{
         if(sucess){
            // toast.success("Registered successfully");
            navigate("/login");
         }
      },[sucess]);



  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', padding: '2.5rem 2rem', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#3b82f6', fontWeight: 700, letterSpacing: '1px' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3" style={{ position: 'relative' }}>
            <FaUserAlt style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a5b4fc' }} />
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="name"
            />
          </div>
          <div className="form-group my-3" style={{ position: 'relative' }}>
            <FaEnvelope style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a5b4fc' }} />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="username"
              required
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
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="new-password"
               minLength={6}
              maxLength={20}
              required
            />
          </div>
          <div className="form-group my-3" style={{ position: 'relative' }}>
            <FaCheck style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a5b4fc' }} />
            <input
              type="password"
              name="cpassword"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              style={{ paddingLeft: '2.2rem', borderRadius: '0.75rem', border: '1px solid #d1d5db', height: '2.7rem', fontSize: '1rem' }}
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-2"
            style={{ width: '100%', borderRadius: '0.75rem', background: 'linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)', border: 'none', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 2px 8px 0 rgba(59, 130, 246, 0.10)' }}
          >
            Register
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.2rem', color: '#64748b', fontSize: '0.97rem' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 500 }}>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Registerform
