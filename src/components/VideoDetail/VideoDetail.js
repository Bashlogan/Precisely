import React, { useState } from "react";
import "./VideoDetail.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

function VideoDetail({ video }) {
  const [infoActive, setInfoActive] = useState(true);
  const [editActive, setEditActive] = useState(false);
  const [bookActive, setBookActive] = useState(false);
  const [chatActive, setChatActive] = useState(false);

  return (
    <React.Fragment>
      <div className="videoDetail">
        <div className={`videoDetailIcon ${infoActive ? "active" : ""}`}>
          <a
            href="/"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setInfoActive(true);
              setEditActive(false);
              setBookActive(false);
              setChatActive(false);
            }}
          >
            <InfoOutlinedIcon />
            {infoActive && <span>&nbsp;&nbsp;Overview</span>}
          </a>
        </div>
        <div className={`videoDetailIcon ${editActive ? "active" : ""}`}>
          <a
            href="/"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setInfoActive(false);
              setEditActive(true);
              setBookActive(false);
              setChatActive(false);
            }}
          >
            <BorderColorOutlinedIcon />
            {editActive && <span>&nbsp;&nbsp;Notes</span>}
          </a>
        </div>
        <div className={`videoDetailIcon ${bookActive ? "active" : ""}`}>
          <a
            href="/"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setInfoActive(false);
              setEditActive(false);
              setBookActive(true);
              setChatActive(false);
            }}
          >
            <ImportContactsOutlinedIcon />
            {bookActive && <span>&nbsp;&nbsp;Reading Material</span>}
          </a>
        </div>
        <div className={`videoDetailIcon ${chatActive ? "active" : ""}`}>
          <a
            href="/"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setInfoActive(false);
              setEditActive(false);
              setBookActive(false);
              setChatActive(true);
            }}
          >
            <ChatBubbleOutlineOutlinedIcon />
            {chatActive && <span>&nbsp;&nbsp;Discussion Forum</span>}
          </a>
        </div>
      </div>
      <div className="videoBottom">
        {infoActive && (
          <div className="videoBottomContainer">
            <div className="videoTags">
              <span>plains</span>
              <span>earth</span>
              <span>geography</span>
              <span>mountains&nbsp;&nbsp;</span>
              <AddCircleRoundedIcon />
            </div>
            {video && <div className="videoTitle">{video.snippet.title}</div>}
          </div>
        )}
        {editActive && (
          <div className="videoBottomContainer">
            {video.snippet.description}
          </div>
        )}
        {bookActive && (
          <div className="videoBottomContainer">
            <div className="videoTitle">
              <small>
                <strong>Published At :</strong>
              </small>{" "}
              {video.snippet.publishedAt}
            </div>
          </div>
        )}
        {chatActive && (
          <div className="videoBottomContainer">
            <div className="videoTitle">No Discussions!</div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default VideoDetail;
