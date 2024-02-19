import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Showitem from "../Showitem/Showitem";
const FolderComponent = () => {
    const {folderId}=useParams();
    
    
    const {currentFolderData,childFolders,childFiles}=useSelector(
      (state)=>({
        currentFolderData:state.filefolders.userFolders.find(
          (folder)=>folder.docId===folderId
        )?.data,
        childFolders:state.filefolders.userFolders.filter(
          (folder)=>folder.data.parent===folderId
        ),
        childFiles:state.filefolders.userFiles.filter(
          (file)=> file.data.parent===folderId
        ),
      }),
     shallowEqual
    );

    const createdFiles=childFiles && childFiles.filter((file)=>file.data.url===null);
    const uploadedFile=childFiles && childFiles.filter((file)=>file.data.data===null);
 
    return (
    <div>
       {
        childFolders.length >0 || childFiles.length>0 ?(
         <>
         {
            childFolders.length>0 &&(
              <Showitem title={"created Folder"} 
              items={childFolders} 
              type={"folder"} />
            )
         }
 
         
         {
          createdFiles && createdFiles.length>0 && (
            <Showitem title={"created Files"} 
         items={createdFiles} 
         type={"files"} />
          )
         }
         
         {
          uploadedFile && uploadedFile.length>0 && (
            <Showitem title={"Uploaded Files"} 
         items={uploadedFile} 
         type={"files"} />
          )
         }

         
         </>
        ):(
          <p className="text-center my-5">
              Empty Folder..
          </p>
        )
       }
   
    </div>
  )
}

export default FolderComponent
