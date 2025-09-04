import React from 'react'
import Registerform from '../../../components/AuthComponent/Registerform'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='container-fluid'>
        {/* <h1 className='display-1 text-center'>JOIN US</h1> */}
        <div className='row'>
           <div className='col-md-6 offset-md-3'>
                <Registerform/>
                {/* <Link to="/login">
                    already register
                </Link> */}
           </div>
        </div>
    
    </div>
  )
}

export default Register
