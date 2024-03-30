import React from 'react'
import Showitem from '../Showitem/Showitem'
import { shallowEqual, useSelector } from 'react-redux'

const Dashhome = () => {

    const {isLoading,userFolders,userFiles}=useSelector(
      (state)=>({
       isLoading:state.filefolders.isLoading,
      userFolders:state.filefolders.userFolders ,
      userFiles:state.filefolders.userFiles.filter(
        (file)=>file.data.parent==="root"
      ),
    }),
    shallowEqual);
  return (
    <div className='col-md-12 w-100 color'>
       {
        !isLoading ?(
          <h1 className='display-1 my-5 text-center'>Loading...</h1>
        ):(
        <>
        <Showitem title={"created Folder"} 
         items={userFolders} 
         type={"folder"}/>
         <Showitem title={"created Files"}  
         items={userFiles.filter((file)=>file.data.url===null)} 
         type={"files"} />
          <Showitem title={"uploaded Files"}  
         items={userFiles.filter((file)=>file.data.data===null)} 
         type={"files"} />
        </>
        )   
       } 
     </div>
  )
}

export default Dashhome
