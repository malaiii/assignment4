import React, {Fragment,Component} from 'react';

export default class searchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm:''
        }
       // this.handleSearch = this.handleSearch.bind(this);
    }
    onChange(event) {
        this.setState({searchTerm:event.target.value});
    }
    // handleSearch(){
    //     console.log(this.state.searchTerm);
    //     this.props.handleMovieSearch.bind(null,this.state.searchTerm);
    // }
    render(){
        return(
            <div>
                <form>
                    <input type="text" onChange={this.onChange.bind(this)}/>
                    <input type="button" value="search Movie" onClick={this.props.handleMovieSearch.bind(null,this.state.searchTerm)}/>
                </form>
            </div>
        )
    }
}