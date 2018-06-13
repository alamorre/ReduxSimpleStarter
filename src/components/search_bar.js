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
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  // This will catch when the user is typing
  // Triggered by onChange={this.onInputChange}
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
}

// This allows other files to access ONLY these instances
export default SearchBar;
