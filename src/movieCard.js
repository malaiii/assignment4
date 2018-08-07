import React, {Fragment,Component} from 'react';


export default class movieCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const movieDetails = this.props.movieDetails;
        return(
            <div>
                {movieDetails.title}
            </div>
        )
    }
}