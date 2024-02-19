  // Make sure to provide the correct path
import fileFolderReducer from './fileFolderReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer=combineReducers(
    {  auth:authReducer,
        filefolders:fileFolderReducer,
    })


export default rootReducer;