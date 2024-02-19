import React from 'react'
import { FaSave } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFileData } from '../../../redux/actionCreator/filefolderaction';

const Header = ({fileName,fileData,prevFileData,fileId}) => {
   const navigate=useNavigate();
   const dispatch=useDispatch();


  return (
     <nav className='navbar navbar-expand-lg mt-2 py-0 navbar-light bg-white shadow-sm'>
        <p className='navbar-brand my-0 fw-bold ms-5'>{fileName}</p>
         {
           fileData !==prevFileData &&(
            <h5 className='my-0 fw-bold'>Modified</h5>
           )
         }
        <ul className='navbar-nav ms-auto me-5'>
          <li className='nav-item'>
             <button className='btn btn-success' disabled={fileData===prevFileData}
               onClick={()=>{ dispatch(updateFileData(fileId,fileData))}}><FaSave /></button>
            Save
          </li>
          <li className='nav-item'>
             <button className='btn btn-dark'  onClick={()=> navigate(-1)}>
             <RiArrowGoBackFill />
             </button>
               Go Back
          </li>
          
        </ul>
     </nav>
  )
}

export default Header
