import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import { useVideoValue } from "../../VideoProvider";

function VideoCard({ video }) {
  const [date, setDate] = useState();
  const [state, dispatch] = useVideoValue();

  useEffect(() => {
    let date = new Date(video.snippet.publishedAt).toDateString();
    setDate(date.slice(4));
  }, [state, video]);

  const changeVideo = (e) => {
    e.preventDefault();
    dispatch({
      type: "SWITCH",
      video: video,
    });
  };

  return (
    <div className="card mb-3 col-md-12 col-sm-6 col-xs-12">
      <div className="row no-gutters">
        <div className="col-md-5 imgHolder">
          <a href="/" type="button" onClick={changeVideo}>
            <img
              src={video.snippet.thumbnails.high.url}
              className="card-img"
              alt="horizontal"
            />
          </a>
          <hr />
        </div>
        <div className="col-md-7 bodyHolder">
          <div className="card-body">
            <a href="/" type="button" onClick={changeVideo}>
              <div className="card-title">
                {video.snippet.title.slice(0, 30)}
              </div>
            </a>
            <div className="card-text">Crash Course</div>
            <div className="card-text rating">
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarOutlineRoundedIcon />
            </div>
            <div className="card-text cardFooter">
              <span>
                <small>
                  o&nbsp;
                  {date && date}
                </small>
              </span>
              <span className="eye">
                <VisibilityOutlinedIcon />
                <span>&nbsp;15.6k</span>
              </span>
            </div>
          </div>
          <div className="options">
            <MoreVertRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
