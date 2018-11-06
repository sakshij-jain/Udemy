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
            <div>
                <input/>
            </div>
        )
    }
}

export default SearchBar;