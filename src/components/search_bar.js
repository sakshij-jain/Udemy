import React, { Component } from 'react';

// Old Syntax
// const SearchBar = function() {
//     return <input />;
// }

// Functional component
// const SearchBar = () => {
//     return <input />
// };

// Class based component
class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input onChange={(event) => this.props.onSearchTermChange(event.target.value)}/>
            </div>
        )
    }
}

export default SearchBar;