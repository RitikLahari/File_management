import React from 'react'
import { useState ,useEffect} from 'react'
import { FaTimes } from "react-icons/fa";
import {useSelector,shallowEqual,useDispatch} from "react-redux";
import { uploadFile } from '../../../redux/actionCreator/filefolderaction';
import { toast } from 'react-toastify';
// import { createFolder } from '../../../redux/actionCreator/filefolderaction';



const UploadFile = ({setIsFileUploadedModelOpen}) => {
    
    const [file,setFile]=useState(null);
    const [success,setSuccess] =useState(false)
  
   const dispatch=useDispatch();

  //we get the data from redux
  const { userFiles, user, currentFolder,currentFolderData}= useSelector(
    (state) => ({
        userFiles:state.filefolders.userFiles,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find(
        (folder)=> folder.docId === state.filefolders.currentFolder
      ),
    }),
    shallowEqual
    );
 
useEffect(()=>{
  if(success){
    setFile("");
    setSuccess(false);
    setIsFileUploadedModelOpen(false);
  }
},[success]);

//check folder if it already present
//   const checkFolderPresent =(name)=>{
//       const folderPresent=userFolders.find((folders)=>folders.name === name);
//       if(folderPresent){
//         return true;
//       } else{
//         return false;
//       }
//   };

const checkFilePresent = (name ) => {
     const filePresent=userFiles
     .filter((file) => file.data.parent===currentFolder)
     .find((fldr)=> fldr.data.name=== name );
     if(filePresent){
      return true;

     }
     else{
      return false;
     }
};
  


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(file){
            console.log(file);
                if(!checkFilePresent(file.name)){
                    const data={
                        createdAt:new Date(),
                        name: file.name,
                        userId:user.uid,
                        createdBy:user.displayName,
                        path: 
                        currentFolder === "root" ? [] : [
                           ...currentFolderData?.data.path,currentFolder
                        ],
                        parent:currentFolder,
                        lastAccessed:null,
                        updatedAt:new Date(),
                        extension:file.name.split(".")[1],
                        data:null,
                        url:"",
                    };
                    dispatch(uploadFile(file,data,setSuccess));
        }
        } else{
            toast.error("No file created");
        }

    };
    
      

  return (
    <div className='col-md-12  position-fixed top-0 left-0 w-100 h-100' 
    style={{background:"rgba(0,0,0,0.4)" ,zIndex:999}} >
        <div className='row align-item-center justify-content-center'>
            <div className='col-md-4 mt-5 bg-white rounded p-4'>
                <div className='d-flex justify-content-between'>
                    <h4>Upload File</h4>
                    <button className='btn' onClick={()=>setIsFileUploadedModelOpen(false)}>
                    <FaTimes />
                    </button>
                </div>
                <hr/>
                <div className='d-flex flex-column align-item-center'>
                    <form className='mt-3 w-100' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='file' className='form-control' 
                            id='file'
                             onChange={(e)=>setFile(e.target.files[0])}></input>
                        </div>

                        <button type="submit" className='btn btn-primary mt-5 form-control'>
                             Upload File
                        </button>
                    </form>
                </div>
            </div> 
        </div>
      
    </div>
  )
}

export default UploadFile;
