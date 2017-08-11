import React from 'react';
import MovieReviews from './MovieReviews'
// fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=7c5370f2da424cf8846ad4b91780a9d1`)

import 'isomorphic-fetch';

const NYT_API_KEY = '&api-key=c02aaa130c0a49e38fc2d1ffb28fde41';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?query='

class SearchableMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredFetch = () => {
    fetch(URL + `${this.state.searchTerm}` + NYT_API_KEY)
    .then(resp => resp.json())
    .then(resp => resp.results)
    .then(resp => this.setState({
      reviews: resp
    }))
  }



  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <button type="submit" onClick={this.filteredFetch}> Click to filter </button>
      </div>
    )
  }



}


export default SearchableMovieReviewsContainer
