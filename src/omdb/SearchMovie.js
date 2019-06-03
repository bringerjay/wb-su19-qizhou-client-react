import React from 'react'

class SearchMovie
    extends React.Component {
    constructor() {
        super()
        this.state = {
            keyword: '',
            movies: []
        }
    }

    keywordChanged = event =>
        this.setState({keyword: event.target.value})

    searchMovie = () =>
        fetch(`http://www.omdbapi.com/?apikey=4a249f8d&s=${this.state.keyword}`)
            .then(response => response.json())
            .then(this.renderMovies)
        // console.log(this.state.keyword)

    renderMovies = (response) =>
        this.setState({
            movies: response.Search
        })
        // console.log(Search)

    render() {
        return (
            <div>
                <h2>Search Movies</h2>
                <div className="input-group">
                    <input value={this.state.keyword}
                           onChange={this.keywordChanged}
                           className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        <button
                            onClick={this.searchMovie}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                {
                    this.state.movies.map(
                        (movie, index) =>
                            <li key={index} className="list-group-item">
                                {movie.Title}</li>)
                }
                </ul>
            </div>
        )
    }
}
export default SearchMovie;