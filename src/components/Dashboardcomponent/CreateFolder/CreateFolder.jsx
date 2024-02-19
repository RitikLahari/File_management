import React from 'react'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import {useSelector,shallowEqual,useDispatch} from "react-redux";
import { createFolder } from '../../../redux/actionCreator/filefolderaction';
import { toast } from 'react-toastify';


const CreateFolder = ({setIsCreatedFolderModelOpen}) => {
    
    const [folderName,setFolderName]=useState("");
  
   const dispatch=useDispatch();

  //we get the data from redux
  const { userFolders, user, currentFolder,currentFolderData}= useSelector(
    (state) => ({
        userFolders:state.filefolders.userFolders,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData:state.filefolders.userFolders.find(
        folders => folders.docId === state.filefolders.currentFolder),
    }),
    shallowEqual
    );
  

//check folder if it already present
  const checkFolderPresent =(name)=>{
      const folderPresent=userFolders
      .filter((folders)=>folders.data.parent===currentFolder)
      .find((folders)=>folders.data.name === name);
      if(folderPresent ){
        return true;
      } else{
        return false;
      }
  };

// const checkFolderPresent = (name) => {
//     // Ensure userFolders is an array before calling find()
//     if (Array.isArray(userFolders)) {
//       const folderPresent = userFolders.find((folders) => folders.name === name);
//       return !!folderPresent;
//     } else {
//       // Handle the case where userFolders is not an array
//       console.error("userFolders is not an array");
//       return false;
//     }
//   };
  


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(folderName){
            if(folderName.length>3){
                if(!checkFolderPresent(folderName)){
                    const data={
                        createdAt:new Date(),
                        name:folderName,
                        userId:user.uid,
                        createdBy:user.displayName,
                        path: 
                        currentFolder === "root" ? [] : [
                           ...currentFolderData?.data.path,currentFolder
                        ],
                        parent:currentFolder,
                        lastAccessed:null,
                        updatedAt:new Date(),
                    };
                    dispatch(createFolder(data))
                    console.log(data);
                    toast("Folder created " + folderName)
            }else{
                toast.error("folder already present");
            }
        }
            else{
                toast.error("folder name must be at least 3 characters")
            }
        } else{
            toast.error("No folder created");
        }

    };
      

  return (
    <div className='col-md-12  position-fixed top-0 left-0 w-100 h-100' 
    style={{background:"rgba(0,0,0,0.4)" ,zIndex:999}} >
        <div className='row align-item-center justify-content-center'>
            <div className='col-md-4 mt-5 bg-white rounded p-4'>
                <div className='d-flex justify-content-between'>
                    <h4>Create Folder</h4>
                    <button className='btn' onClick={()=>setIsCreatedFolderModelOpen(false)}>
                    <FaTimes />
                    </button>
                </div>
                <hr/>
                <div className='d-flex flex-column align-item-center'>
                    <form className='mt-3 w-100' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='folderName' 
                            placeholder='folder name' value={folderName}
                             onChange={(e)=>setFolderName(e.target.value)}></input>
                        </div>

                        <button type="submit" className='btn btn-primary mt-5 form-control'>
                            create
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CreateFolder;
