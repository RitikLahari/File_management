import React from "react";
import { FcOpenedFolder, FcFile } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {
  changeFolder,
  filedelete,
  Folderdelete,
} from "../../../redux/actionCreator/filefolderaction";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const Showitem = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDoubleClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId));
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-sm p-4">
      <h4 className="text-center font-semibold text-lg border-b pb-2 mb-4">
        {title}
      </h4>

      <div className="flex flex-wrap gap-4">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              key={index * 55}
              className="relative w-32 h-32 flex flex-col items-center justify-center border rounded-lg shadow hover:shadow-md transition cursor-pointer bg-white"
              onDoubleClick={() => handleDoubleClick(item.docId)}
            >
              <div className="text-4xl mb-2">
                {type === "folder" ? <FcOpenedFolder /> : <FcFile />}
              </div>

              <p className="text-sm font-medium text-gray-700 truncate px-2 text-center">
                {item.data && item.data.name ? item.data.name : "Unnamed"}
              </p>

              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering double-click
                  const confirmDelete = window.confirm(
                    `Are you sure you want to delete this ${type}?`
                  );
                  if (!confirmDelete) return;

                  if (type === "folder") {
                    dispatch(Folderdelete(item.docId));
                  } else {
                    dispatch(
                      filedelete(item.docId, item.data.userId, item.data.name)
                    );
                  }
                }}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                title="Delete"
              >
                <MdDelete size={18} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Showitem;
