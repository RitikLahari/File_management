import React from 'react'
import "./Subbar.css"
import { ImUpload } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeFolder } from '../../../redux/actionCreator/filefolderaction';


const Subbar = ({
    setIsCreatedFolderModelOpen,
    setIsCreatedFileModelOpen, setIsFileUploadedModelOpen }) => {
    const  navigate=useNavigate();
    const dispatch=useDispatch();

    const {currentFolder,currentFolderData,userFolders}=useSelector(
        (state)=>({
            currentFolder:state.filefolders.currentFolder,
            userFolders:state.filefolders.userFolders,
            currentFolderData: Array.isArray(state.filefolders.userFolders) 
            ? state.filefolders.userFolders.find(
                (folders) => folders.docId === state.filefolders.currentFolder
            )
            : null,
        }),
        shallowEqual
    );
  const handleNavigate=(link,id)=>{
    navigate(link);
    dispatch(changeFolder(id));
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light ">
        {/* using bootstrp breadcrum */}
       <nav className="ms-5" aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-item-center">
                {
                    currentFolder!=="root" ?(
                        <>
                         <button
                            onClick={()=>handleNavigate("/dashboard","root")}
                            className="breadcrum-item btn btn-link text-decoration-none">
                                Root
                         </button>
                         {
                            currentFolderData?.data.path.map((folder,index)=>(
                                <button key={index}   className='breadcrumb-item btn btn-link text-decoration-none'  onClick={()=>handleNavigate(`/dashboard/folder/${
                                    userFolders.find((fldr)=>folder=== fldr.docId).docId
                                }`,
                                userFolders.find((fldr)=> folder=== fldr.docId).docId
                                 )}>
                                    {userFolders.find((fldr)=>folder===fldr.docId).docId}

                                </button>
                            ))
                         }
                         <li className='breadcrumb-item active'>
                            {currentFolderData?.data.name}
                         </li>
                        </>
                    ):(
                        <>
                        <li className='breadcrumb-item active'>
                           Root
                        </li>
                        </>
                    )
                }
            </ol>
      </nav>


            {/* <p className='small ms-4'>
                Root
            </p> */}
            <ul className='navbar-nav m'>
                <li className='nav-item mx-2'>
                    <button className='btn btn-outline-dark' 
                    onClick={()=>setIsFileUploadedModelOpen(true)} >
                    <ImUpload />
                        upload File
                    </button>
                </li>
                <li className='nav-item mx-2'>
                    <button className='btn btn-outline-dark' onClick={()=>setIsCreatedFileModelOpen(true)}>
                    <IoIosCreate /> create File
                    </button>
                </li>
                <li className='nav-item mx-2' onClick={()=>setIsCreatedFolderModelOpen(true)}>
                    <button className='btn btn-outline-dark'>
                    <FcFolder /> create Folder
                    </button>
                </li>

            </ul>
       </nav>
    </div>
  )
}

export default Subbar
