import React, { createContext, useContext, useReducer } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ videoReducer, videoState, children }) => (
  <VideoContext.Provider value={useReducer(videoReducer, videoState)}>
    {children}
  </VideoContext.Provider>
);

export const useVideoValue = () => useContext(VideoContext);
