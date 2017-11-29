import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import { search, selectVideo } from "../actions";
import SearchBar from "../components/SearchBar";
import VideoPlayer from "../components/VideoPlayer";
import VideoList from "../components/VideoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchVideos = this.searchVideos.bind(this);
    this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
  }

  searchVideos(term) {
    this.props.dispatch(search(term));
  }

  updateSelectedVideo(video) {
    this.props.dispatch(selectVideo(video));
    window.scrollTo(0, 0);
  }

  render() {
    const { term, isFetching, selectedVideo, videos } = this.props;
    const handleSearch = debounce(term => this.searchVideos(term), 300, {
      leading: false,
      trailing: true
    });
    return (
      <div>
        <h3 className="text-error text-center">Youtube API</h3>
        <div className="divider" />
        <SearchBar term={term} onTextChange={handleSearch} />
        {isFetching ? (
          <div className="loading loading-lg" />
        ) : (
          <div>
            <VideoPlayer video={selectedVideo} />
            <VideoList videos={videos} onSelect={this.updateSelectedVideo} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.search
  };
};

export default connect(mapStateToProps)(App);
