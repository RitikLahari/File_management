import React from "react";
import "./Subbar.css";
import { ImUpload } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreator/filefolderaction";

const Subbar = ({
  setIsCreatedFolderModelOpen,
  setIsCreatedFileModelOpen,
  setIsFileUploadedModelOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFolder, currentFolderData, userFolders } = useSelector(
    (state) => ({
      currentFolder: state.filefolders.currentFolder,
      userFolders: state.filefolders.userFolders || [],
      currentFolderData: Array.isArray(state.filefolders.userFolders)
        ? state.filefolders.userFolders.find(
            (folders) => folders.docId === state.filefolders.currentFolder
          )
        : null,
    }),
    shallowEqual
  );

  const handleNavigate = (link, id) => {
    navigate(link);
    dispatch(changeFolder(id));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        {/* Breadcrumb */}
        <nav className="ms-5" aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-item-center">
            {currentFolder !== "root" ? (
              <>
                <button
                  onClick={() => handleNavigate("/dashboard", "root")}
                  className="breadcrum-item btn btn-link text-decoration-none"
                >
                  Root
                </button>

                {currentFolderData?.data?.path?.map((folderId, index) => {
                  const fldr = userFolders.find((f) => f.docId === folderId);
                  if (!fldr) return null; // ✅ prevent crash
                  return (
                    <button
                      key={index}
                      className="breadcrumb-item btn btn-link text-decoration-none"
                      onClick={() =>
                        handleNavigate(`/dashboard/folder/${fldr.docId}`, fldr.docId)
                      }
                    >
                      {fldr.data?.name || fldr.docId}
                    </button>
                  );
                })}

                <li className="breadcrumb-item active">
                  {currentFolderData?.data?.name || "Unnamed"}
                </li>
              </>
            ) : (
              <li className="breadcrumb-item active">Root</li>
            )}
          </ol>
        </nav>

        {/* Action Buttons */}
        <ul className="navbar-nav m">
          <li className="nav-item mx-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsFileUploadedModelOpen(true)}
            >
              <ImUpload /> Upload File
            </button>
          </li>
          <li className="nav-item mx-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsCreatedFileModelOpen(true)}
            >
              <IoIosCreate /> Create File
            </button>
          </li>
          <li className="nav-item mx-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsCreatedFolderModelOpen(true)}
            >
              <FcFolder /> Create Folder
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Subbar;
