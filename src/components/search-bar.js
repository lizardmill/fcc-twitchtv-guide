import React, { Component } from 'react';
import PropTypes from 'prop-types';

// practicing class based components

const divStyle= {
  height: "50px",
  background: "white",
  padding: "6px",
  borderRadius: "0 10px 0 0",
  border: "1px rgba(0,0,0,.125)",
  borderTopStyle: "solid",
  borderRightStyle: "solid",
  borderBottomStyle: "none",
  borderLeftStyle: "solid"
}

const inputStyle= {
  margin: "auto",
  width: "300px",
  borderRadius: "25px"
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar" style={divStyle}>
        <input
          value={this.props.term}
          className="form-control"
          placeholder="Search..."
          onChange={event => this.onInputChange(event.target.value)}
          style={inputStyle} />
      </div>
    )
  }

  onInputChange(term) {
    this.props.onSearchTermChange(term);
  }
}

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired
}

export default SearchBar;
