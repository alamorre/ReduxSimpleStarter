// Call the needed imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyC67KAkEsOfkGh2gAiIwkTc3wibjDlmJ_8'

// App component
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'XXL'}, (videos) => {
      this.setState({ videos }); // or ({ videos :videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// 2. Take this component generated HTML and put it on the page (in the DOM)
// This is a self closing instance of App now in the container class
ReactDOM.render(<App />, document.querySelector('.container'));
