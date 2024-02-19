import React from 'react';
import { FcOpenedFolder, FcFile } from "react-icons/fc";
import "./Showitem.css";
import { useNavigate } from 'react-router-dom';
import { changeFolder, getFolders } from '../../../redux/actionCreator/filefolderaction';
import { useDispatch } from 'react-redux';

const Showitem = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
 
  const handleDoubleClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId));
      navigate(`/dashboard/folder/${itemId}`);
    } else {
       navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className='w-100'>
      <h4 className='text-center border-bootom'>{title}</h4>
      <div className='row gap-2 py-4 px-1 flex-wrap'>
        {Array.isArray(items) &&
          items.map((item, index) => (
            <p
              key={index * 55}
              className='col-md-2 p-2 text-center border'
              onDoubleClick={() => handleDoubleClick(item.docId)}
            >
              {type === "folder" ? (
                <FcOpenedFolder />
              ) : (
                <FcFile />
              )}
              {item.data && item.data.name ? item.data.name : "Unnamed"}
            </p>
          ))}  
      </div>
    </div>
  );
};

export default Showitem;
