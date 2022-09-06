import React, { useState } from "react";
import sidebar from "../../images/sidebar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Sidebar.css";

const Sidebar = (props) => {
  const colors = [
    "#d98880",
    "#c39bd3",
    "#7fb3d5",
    "#76d7c4",
    "#7dcea0",
    "#f7dc6f",
    "#e59866",
    "#d7dbdd",
    "#85929e",
  ];
  const [listeOpen, setListOpen] = useState(false);
  const addIcon = () => {
    setListOpen(!listeOpen);
  };
  return (
    <div className="sidebar">
      <img src={sidebar} alt="Add Icon" onClick={addIcon} />
      <ul className={`sidebar_list ${listeOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => {
              props.addNote(item);
              toast.success("Note Added Successfully !", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          />
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
