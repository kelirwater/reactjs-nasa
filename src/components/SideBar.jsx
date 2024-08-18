import React from "react";

export default function SideBar(props) {
  const { handleToogle, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToogle} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title} </h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToogle}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
