import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import {useSelector,shallowEqual,useDispatch} from "react-redux";
import { createFile } from '../../../redux/actionCreator/filefolderaction';
import { toast } from 'react-toastify';

const CreateFile = ({setIsCreatedFileModelOpen}) => {
    
    const [fileName,setFileName]=useState("");
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
    setFileName("");
    setSuccess(false);
    setIsCreatedFileModelOpen(false);
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

const checkFilePresent = (name,exten ) => {
    if(!exten){
        name=name+"txt";
    }
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
        if(fileName){
            if(fileName.length>3){
              let extension=false;
              if(fileName.split(".").length>1)
              {
                extension=true;
              }
              //check file extension
                if(!checkFilePresent(fileName,extension)){
                    const data={
                        createdAt:new Date(),
                        name: extension ? fileName:`${fileName}.txt`,
                        userId:user.uid,
                        createdBy:user.displayName,
                        path: 
                        currentFolder === "root" ? [] : [
                           ...currentFolderData?.data.path,currentFolder
                        ],
                        parent:currentFolder,
                        lastAccessed:null,
                        updatedAt:new Date(),
                        extension:extension ? fileName.split(".")[1]:"txt",
                        data:"",
                        url:null,
                    };
                    dispatch(createFile(data,setSuccess))
                    console.log("data",data);
                    toast("File created " + fileName)
            }else{
                toast.error("file already present");
            }
        }
            else{
                toast.error("file name must be at least 3 characters")
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
                    <h4>Create File</h4>
                    <button className='btn' onClick={()=>setIsCreatedFileModelOpen(false)}>
                    <FaTimes />
                    </button>
                </div>
                <hr/>
                <div className='d-flex flex-column align-item-center'>
                    <form className='mt-3 w-100' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='fileName' 
                            placeholder='file name eg: file.txt,.html' value={fileName}
                             onChange={(e)=>setFileName(e.target.value)}></input>
                        </div>
                        <button type="submit" className='btn btn-primary mt-5 form-control'>
                            create File
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CreateFile;
