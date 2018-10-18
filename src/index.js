import React from 'react';
import ReactDOM from 'react-dom'; //dont need ./ basically path as they are installed using npm, it will search in node_modules
import SearchBar from './components/search_bar'; // No need of extension unless it is js file

const API_KEY = "AIzaSyD7DLhgOXId3B42yOBnOUb1PxzLFCu7fLE";

// Component Class
const App = () => { // New ES6 syntax
    return (
        <div>
            <SearchBar />
        </div>
    ); 
}

// Component Instance
ReactDOM.render(<App />, document.getElementById('container')); // document.querySelector('.container')