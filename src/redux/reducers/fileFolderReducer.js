
import * as types from "../actionTypes/filefolderTypes"

const initialState={
    isLoading:true,
    currentFolder:"root",
    userFolders:[],
    userFiles:[],
    adminFolders:[] ,
    adminFiles:[],
}

const fileFolderReducer=(state=initialState,action)=>{
    console.log(state.userFolders);
    switch(action.type){
        
        case types.CREATE_FOLDER:
            return {
                ...state,
                userFolders: [...state.userFolders,action.payload],
            };
        case types.ADD_FOLDERS:
            return{
                ...state,
                userFolders:action.payload,
            };
        case types.SET_LOADING:
            return{
                ...state,
                userFolders:action.payload,
            };
        case types.CHANGE_FOLDER:
            return{
                ...state,
                currentFolder:action.payload
            }
        case types.ADD_FILES:
            return{
                ...state,
                userFiles:action.payload,
            };
        case types.CREATE_FILE:
            return{
                ...state,
                userFiles:[...state.userFiles,action.payload],
            };
        case types.SET_FILE_DATA:
            const {fileId,data}=action.payload;
            const allFile=state.userFiles;
            const currentFile=allFile.find((file)=> file.docId===fileId);
            currentFile.data.data=data;
            return{
                ...state,
                userFiles:state.userFiles.map((file)=>file.docId===fileId ? currentFile:file),
                
            }

        default:
            return state;
    }
};
export default fileFolderReducer;