import * as types from "../types";

const initialState = {
  term: "",
  isFetching: false,
  videos: [],
  selectedVideo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.PUT_VIDEOS:
      return Object.assign({}, state, {
        videos: action.videos,
        selectedVideo: action.videos[0]
      });
    case types.TOGGLE_FETCHING:
      return Object.assign({}, state, { isFetching: !state.isFetching });
    case types.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, { term: action.term });
    case types.SELECT_VIDEO:
      return Object.assign({}, state, { selectedVideo: action.video });
    default:
      return state;
  }
}
