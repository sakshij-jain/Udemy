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
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            console.log(videos);
            this.setState({
                videos
            });
        });
    }
    render() {
        const { videos } = this.state;
        return (
            <div className="search videolist">
                <SearchBar />
                <VideoDetail video={videos[0]}/>
                <VideoList videos={videos} />
            </div>
        )
    }
}

// Component Instance
ReactDOM.render(<App />, document.getElementById('container')); // document.querySelector('.container')