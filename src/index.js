// Call the needed imports
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import from other silos
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC67KAkEsOfkGh2gAiIwkTc3wibjDlmJ_8'

// Executed a youtube search
YTSearch({key: API_KEY, term: 'XXL'}, function(data) {
  console.log(data);
});

// 1. Create our first component which will produce html
const App = () => { // This is a FUNCTIONAL COMPONENT
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// 2. Take this component generated HTML and put it on the page (in the DOM)
// This is a self closing instance of App now in the container class
ReactDOM.render(<App />, document.querySelector('.container'));
