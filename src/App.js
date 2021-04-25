import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import YoutubeEmbed from "./components/YoutubeEmbed/YoutubeEmbed";
import VideoCard from "./components/VideoCard/VideoCard";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import { useVideoValue } from "./VideoProvider";

const youtube_key = "AIzaSyAQ92WPe_vN9Zidle42cMzKHWIFiFD9svc";

function App() {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState();
  const classes = useStyles();

  const [state, dispatch] = useVideoValue();

  useEffect(() => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    setOpen(true);
    axios
      .get(url, {
        params: {
          part: "snippet",
          q: "django",
          maxResults: 15,
          key: youtube_key,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
        setActiveVideo(response.data.items[0]);
        dispatch({
          type: "SWITCH",
          video: response.data.items[0],
        });
        setOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
        setOpen(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setOpen(true);
    setActiveVideo(state);
    setOpen(false);
  }, [state]);

  return (
    <div className="container-fluid app">
      <div className="content row">
        <div className="leftSide col-lg-8 col-md-7 col-sm-12">
          {activeVideo && <YoutubeEmbed activeVideo={activeVideo} />}
          <div className="viewTime">
            <hr />
            <span className="text-muted ml-2">
              <small>
                <strong>17:43/50:32</strong>
              </small>
            </span>
          </div>
          <VideoDetail video={activeVideo} />
        </div>
        <div className="rightSide col-lg-4 col-md-5 col-sm-12">
          <div className="mb-4 mt-1">
            <span className="recommended">Recommended</span>
          </div>
          <div className="row">
            {videos.map((video) => (
              <VideoCard key={video.etag} video={video} />
            ))}
          </div>
        </div>
      </div>
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
