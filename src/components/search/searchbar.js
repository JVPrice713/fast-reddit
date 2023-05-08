import React from "react";

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(event) {
        this.setState ({term: event.target.value})
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Search Subreddit" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
};

