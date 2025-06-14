import * as types from "../actionTypes/filefolderTypes";
import fire from "../../config/firebase";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
//actions
//add folde

const addFolder =(payload)=>({
    type:types.CREATE_FOLDER,
    payload
});
const addFolders =(payload)=>({
    type:types.ADD_FOLDERS,
    payload
})

const setLoading=(payload)=>({
    type: types.SET_LOADING,
    payload
})

const setChangeFolder=(payload)=>({
    type:types.CHANGE_FOLDER,
    payload,
})


//action creator

export const createFolder=(data)=>(dispatch)=>{
    fire.firestore()
    .collection("folders")
    .add(data)
    .then(async(folder)=>{
        const folderData=await(await folder.get()).data();
        const folderId=folder.id;
        dispatch(addFolder({ data:folderData,docId:folderId }));
        toast("folder created successfully");
         });
};

export const getFolders=(userId)=>(dispatch)=>{
    if (!userId) {
        console.error("userId is undefined or null");
        return;
    }
    dispatch(setLoading(true));
    fire.firestore()
    .collection("folders")
    .where("userId","==",userId)
    .get()
    .then(async(folders)=>{
        const folderData=await folders.docs.map((folder)=>({
            data: folder.data(),
            docId:folder.id,
        })
         );
         dispatch(setLoading(false));
         dispatch(addFolders(folderData));
        //  console.log(docId);
           
        }
    );
}

//all the file action is there
//add file 
const addFiles=(payload)=>({
    type:types.ADD_FILES,
    payload,
})

//create file 
const addFile=(payload)=>({
    type:types.CREATE_FILE,
    payload,
})

const setFileData=(payload)=>({
    type:types.SET_FILE_DATA,
    payload,
})





export const changeFolder=(folderId)=>(dispatch)=>{
    dispatch(setChangeFolder(folderId))
}
  


//action creator

export const getFile=(userId)=>(dispatch)=>{
    if (!userId) {
        console.error("userId is undefined or null");
        return;
    }
    dispatch(setLoading(true));
    fire.firestore()
    .collection("files")
    .where("userId","==",userId)
    .get()
    .then(async(files)=>{
        const fileData=await files.docs.map((file)=>({
            data: file.data(),
            docId:file.id,
        })
         );
        //  dispatch(setLoading(false));
         dispatch(addFiles(fileData));
        //  console.log(docId);
           
        }
    );
}

export const createFile=(data,setSuccess)=>(dispatch)=>{
   fire
   .firestore()
   .collection("files").add(data)
   .then(async (file)=>{
    const fileData=await(await file.get()).data();
    const fileId=file.id;
    toast("File created success")
    dispatch(addFile({data:fileData,docId:fileId}));
   })
   .catch(()=>{
    setSuccess(false);
   });
}
;


export const updateFileData=(fileId,data)=>(dispatch)=>{
    fire.firestore()
    .collection("files")
    .doc(fileId)
    .update({data})
    .then(()=>{
        dispatch(setFileData({fileId,data}));
    }).catch(()=>{
        toast.error("File update error");
    })
}




export const uploadFile=(file,data,setSuccess)=>(dispatch)=>{
    console.log(data);
    // if (!navigator.onLine) {
    //     toast.error("You're offline. Please check your internet connection.");
    //     setSuccess(false);
    //     return;
    //   }
   const uploadFileRef=fire.storage().ref(`file/${data.userId}/${data.name}`);

   uploadFileRef.put(file).on("state_changed",(snapshot)=>{
    const progress=Math.round(
        (snapshot.bytesTransferred/snapshot.totalBytes)*100
    );
    console.log("upload" +progress + "%");  
   }, 
   (error)=>{
    console.log(error);
   },
   async ()=>{

    const fileUrl=await uploadFileRef.getDownloadURL();
    const fullData={...data,url:fileUrl};
    fire.firestore().collection("files").add(fullData).then(
        async(file)=>{
            const fileData=await(await file.get()).data();
            const fileId=file.id;
            dispatch(addFile({data:fileData,docId:fileId}));
            toast("file uploaded successfully");
            setSuccess(true);
        }).catch(()=>{
            setSuccess(false);
        })
    // console.log(fileData);
    // alert("file uploaded successfully!");
    // setSuccess(true);
     
   }
   
   
   );
};