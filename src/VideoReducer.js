export const videoState = null;

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH":
      return action.video;

    default:
      return state;
  }
};
