import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'c02aaa130c0a49e38fc2d1ffb28fde41';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;





class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: []
    }

  }

  componentWillMount(){
    this.getDate()
  }

  getDate = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => this.setState({
      reviews: resp.results
    }))
  }

  changeState = (reviews) => {
    this.setState({
      reviews: reviews
    })
  }


  render(){
    // console.log(this.state.reviews)
    return (
      <div className="latest-movie-reviews" >
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}



export default LatestMovieReviewsContainer;
