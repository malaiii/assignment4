import React, {Component} from 'react';
import SearchMovie from "./searchMovie";
import SearchResults from "./searchResults";

export default class MovieApp extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm:'',
            searchResults : []  
        }
        this.handleMovieSearch = this.handleMovieSearch.bind(this);
    }
    handleMovieSearch(searchTerm){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b8787dd277a654c3543ad9efad8c19ba&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(r => {
                this.setState({searchResults:r.results});
               //console.log( this.state.searchResults);
        });
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <SearchMovie handleMovieSearch={this.handleMovieSearch}/>
                <SearchResults movieList = {this.state.searchResults} />
            </div>
        )
    }
}