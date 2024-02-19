import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';
import { IoIosBackspace } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const FileComponents = () => {
    const [fileData,setFileData]=useState(null);
    const {fileId} =useParams();
    const [prevFileData,setPrevFileData]=useState("");
  
  
    const {currentFile} =useSelector((state) =>({

        currentFile:state.filefolders.userFiles.find(
            (file)=> file.docId===fileId
        ),

    })
    ,shallowEqual
   )
 const navigate=useNavigate();
    useEffect(()=>{
      if(currentFile){
        setFileData(currentFile.data.data);
        setPrevFileData(currentFile.data.data)
      }
    },[currentFile,currentFile.data.data])


    const downloadFile=()=>{
       const element=document.createElement("a");
       element.setAttribute(
        "href",currentFile.data.url
       );
       element.setAttribute("download",currentFile.data.name);
       element.setAttribute("target","_blank");
       element.style.display="none";
       document.body.appendChild(element);
       element.click();
       document.body.removeChild(element);
    }

  return ( 
    <div>
      {
        fileData !== null ?(
          <>
             <Header fileName={currentFile.data.name} 
       fileData={fileData}
        prevFileData={prevFileData}
        fileId={fileId}/>
       {/* FileComponents : {JSON.stringify(currentFile)} */}
       <CodeEditor fileName={currentFile.data.name} 
       data={fileData}
        setData={setFileData}/>
          </>
        ): 
           (
             <div className='position-fixed left-0 top-0  w-100 h-100 bg-black text-white '>
                <div className='d-flex py-4 px-5 justify-content-between align-item-center'>
                  <p title={currentFile.data.name}>
                    {
                      currentFile.data.name.length>40 ?
                      currentFile.data.name.slice(0,40)+ "... ."+
                      currentFile.data.extension : currentFile.data.name
                    }
                  </p>
                  <div className="d-flex">
                    <button onClick={()=>navigate(-1)}>
                    <IoIosBackspace />
                          BACK
                    </button>
                    <button className='btn btn-sm btn-primary' onClick={()=>downloadFile()}>
                    <FaDownload />
                        Download
                    </button>

                  </div>

                  </div>
                      <div className='w-100 mt-4' style={{height:"500px"}}>
                        {
                          currentFile.data.extension.includes("png")||
                          currentFile.data.extension.includes("jpg")||
                          currentFile.data.extension.includes("jpeg")||
                          currentFile.data.extension.includes("gif") ?(
                            <img src={currentFile.data.url}
                            alt={currentFile.data.name} className='w-100 h-100'/>
                          ):(
                              <div className='align-item-center justify-content-center'>
                                <p className='text-center'>
                                  File not Supported download it 
                                </p>
                                </div>
                          )
                        }

                        </div>
              </div>
          ) 
           }
      
    </div>
  );
};

export default FileComponents
