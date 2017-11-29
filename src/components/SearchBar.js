import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: props.term
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onTextChange } = this.props;
    this.setState({ term: e.target.value }, () => {
      onTextChange(this.state.term);
    });
  }

  render() {
    const { term } = this.state;
    return (
      <div className="form-group">
        <input
          type="text"
          value={term}
          onChange={this.handleChange}
          className="form-input"
        />
      </div>
    );
  }
}

export default SearchBar;
