import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => props.onInputChange(event.target.value)}
                className="search-input"
                placeholder="Type Keywords"
            />
        </div>
    )
}

export default SearchBox;