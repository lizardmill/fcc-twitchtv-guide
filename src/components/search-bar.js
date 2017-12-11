import React, { Component } from 'react';
import PropTypes from 'prop-types';

// practicing class based components

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.props.term}
          onChange={event => this.onInputChange(event.target.value)} />
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
