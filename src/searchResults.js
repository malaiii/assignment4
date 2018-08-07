import React, {Fragment,Component} from 'react';
import MovieCard from "./movieCard"

export default class searchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm:''
        }
       // this.handleSearch = this.handleSearch.bind(this);
    }
    render(){
        const movieList = this.props.movieList;
        return(
            <div>
                    {
                        movieList.map((movie,index) =>
                            <MovieCard key={index} movieDetails={movie} />
                    )
                    }
            </div>
        )
    }
}