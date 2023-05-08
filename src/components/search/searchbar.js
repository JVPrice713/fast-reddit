import React, { useState } from "react";

export class Searchbar extends React.Component {
    render() {
        return 
    }
};


const searchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const subreddits = [];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    if (searchInput.length > 0) {
        subreddits.filter((subreddit) => {
        return subreddit.name.match(searchInput);
    });
    };

    return ( 
        <div>
            <input type="search" placeholder="Search Subreddit" onChange={handleChange} value={searchInput} />
            
        </div>
    )
}

export default searchBar;