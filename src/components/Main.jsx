import React from "react";

export default function (props) {
  const { data } = props;
  return (
    <div className="backgroundContainer">
      <div className="videoWrapper">
        {data?.media_type === "video" ? (
          <iframe
            src={data?.url}
            title={data?.title || "Video"}
            frameBorder="0"
            allowFullScreen
            className="mediaFrame"
          ></iframe>
        ) : (
          <img
            src={data?.url}
            alt={data?.title || "big image"}
            className="bgImage"
          />
        )}
      </div>
    </div>
  );
}
