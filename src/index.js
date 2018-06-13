// Call the needed imports
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC67KAkEsOfkGh2gAiIwkTc3wibjDlmJ_8'

// 1. Create our first component which will produce html
const App = () => { // Fat arrow beats 'function' due to less repetitive syntax
  return <div>Hi</div>;
}

// 2. Take this component generated HTML and put it on the page (in the DOM)
// This is a self closing instance of App now in the container class
ReactDOM.render(<App />, document.querySelector('.container'));
