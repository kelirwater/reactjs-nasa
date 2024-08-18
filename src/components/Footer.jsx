import React from "react";

export default function Footer(props) {
  const { handleToogle, data } = props;
  return (
    <footer>
      <div className="bgGradiant"></div>
      <div>
        <h2>{data?.title} </h2>

        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToogle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
