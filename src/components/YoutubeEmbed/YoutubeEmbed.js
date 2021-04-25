import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ activeVideo }) => (
  <div className="videoFrame">
    <iframe
      src={
        activeVideo
          ? `https://www.youtube.com/embed/${activeVideo.id.videoId}`
          : "SIyxjRJ8VNY"
      }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="frame"
    />
  </div>
);

export default YoutubeEmbed;
