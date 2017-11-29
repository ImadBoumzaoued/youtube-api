import * as types from "../types";
import YTApi from "youtube-api-search";
const API_KEY = "AIzaSyA0kaPfGVTfP8pPfWWzu4Kg2P5iptmLV6E";

export function search(term) {
  return dispatch => {
    dispatch(toggleFetching());
    dispatch(updateTerm(term));
    YTApi(
      {
        key: API_KEY,
        term
      },
      videos => {
        dispatch(putVideos(videos));
        dispatch(toggleFetching());
      }
    );
  };
}

export function selectVideo(video) {
  return {
    type: types.SELECT_VIDEO,
    video
  };
}

function putVideos(videos) {
  return {
    type: types.PUT_VIDEOS,
    videos
  };
}

function toggleFetching() {
  return {
    type: types.TOGGLE_FETCHING
  };
}

function updateTerm(term) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    term
  };
}
