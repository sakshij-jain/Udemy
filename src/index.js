import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //dont need ./ basically path as they are installed using npm, it will search in node_modules
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // No need of extension unless it is js file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD7DLhgOXId3B42yOBnOUb1PxzLFCu7fLE";

// Component Class
// const App = () => { // New ES6 syntax
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     ); 
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            term: 'surfboards'
        };
        this.videoSearch(this.state.term);
    }

    videoSearch(term) {
        console.log(term);
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0],
                term
            });
        }); 
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        const { videos, selectedVideo } = this.state;
        return (
            <div className="search videolist">
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={selectedVideo}/>
                <VideoList videos={videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        )
    }
}

// Component Instance
ReactDOM.render(<App />, document.getElementById('container')); // document.querySelector('.container')