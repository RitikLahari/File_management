import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Route, Routes, useNavigate ,useLocation} from 'react-router-dom';
import Dashnavbar from '../../components/Dashboardcomponent/Navbar/Dashnavbar';
import Subbar from '../../components/Dashboardcomponent/Subbar/Subbar';
import Dashhome from '../../components/Dashboardcomponent/Dashhome/Dashhome';
import CreateFolder from '../../components/Dashboardcomponent/CreateFolder/CreateFolder';
import { getFile, getFolders } from '../../redux/actionCreator/filefolderaction';
import CreateFile from '../../components/Dashboardcomponent/CreateFile/CreateFile';
import FolderComponent from '../../components/Dashboardcomponent/FolderComponent/FolderComponent';
import UploadFile from '../../components/Dashboardcomponent/UploadFile/UploadFile';
import FileComponents from '../../components/Dashboardcomponent/FileComponents/FileComponents';
import Footer from '../../components/Footer/Footer';


const Dashboard = () => {
  const [isCreatedFolderModalOpen,setIsCreatedFolderModelOpen]=useState(false);
  const [isCreatedFileModalOpen,setIsCreatedFileModelOpen]=useState(false);
  const [isFileUploadedModelOpen,setIsFileUploadedModelOpen]=useState(false);
  
  const [showSubbar,setShowSubbar]=useState(true);
  const {pathname}=useLocation();
  
  const {isLoggedIn,isLoading,userId}=useSelector((state)=>(
    {isLoggedIn:state.auth.isAuthenticated,
     isLoading:state.filefolders.isLoading,
     userId:state.auth.user.uid,
  }),shallowEqual);


  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/");
     
    }
  },[]);

  useEffect(()=>{
    if(isLoading && userId){
      dispatch(getFolders(userId));
      dispatch(getFile(userId));
    }
  },[isLoading,userId,dispatch]);


  useEffect(()=>{
       if(pathname.includes("/file/")){
          setShowSubbar(false);
       }
  },[pathname])
  return (
    <>
    {
      isCreatedFolderModalOpen && (
        <CreateFolder setIsCreatedFolderModelOpen={setIsCreatedFolderModelOpen}/>
      )
    }
     {
       isFileUploadedModelOpen && (
        < UploadFile setIsFileUploadedModelOpen={setIsFileUploadedModelOpen}/>
      )
    }
      {
      isCreatedFileModalOpen && (
        < CreateFile setIsCreatedFileModelOpen={setIsCreatedFileModelOpen}/>
      )
    }
   
     <Dashnavbar/>
     {
       showSubbar &&(
        <Subbar setIsCreatedFolderModelOpen={setIsCreatedFolderModelOpen} 
        setIsCreatedFileModelOpen={setIsCreatedFileModelOpen}
        setIsFileUploadedModelOpen={setIsFileUploadedModelOpen}
        />
       )
     } 
   
      <Routes>
          <Route path="" element={<Dashhome/>}/>
          <Route path='folder/:folderId' element={<FolderComponent/>}/>
          <Route path='file/:fileId' element={<FileComponents/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default Dashboard
