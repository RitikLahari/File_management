import React from 'react'
import Loginform from '../../../components/AuthComponent/Loginform'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container-fluid'>
        <h1 className='display-1 text-center'>LOGIN</h1>
        <div className='row'>
           <div className='col-md-6 offset-md-3'>
                <Loginform/>
                <Link to="/register">
                    Not register
                </Link>
           </div>
        </div>
    
    </div>
  )
}

export default Login
