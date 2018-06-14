// Add the needed imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// This is the Search Bar class declaration
// Extends react component to be a React Component
class SearchBar extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // For state, 'term' represents Search Term
    this.state = {term: ''}; // This is the ONLY place where state changes like this
  }

  // Every react class has a render method which returns JSX
  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// This allows other files to access ONLY these instances
export default SearchBar;
