import React from 'react';


const MovieReviews = ({reviews}) => {

  MovieReviews.defaultProps = {
    reviews: reviews
  }
  // console.log(reviews)

  debugger

  return (
    <div className="review-list" >
    {reviews.map(review => <Review reviewHeadline={review.headline}  reviewBy={review.byline} criticsPick={review.critics_pick} linkToReview={review.link.url}/>)}
    </div>
  )
}

const Review = ({reviewBy, reviewHeadline, criticsPick, linkToReview, image}) => {
  return (
    <div className="review" >
      <div className="column" >
        <div className="ui fluid card" >
          <h3>{reviewHeadline}</h3>
          <p> Written By: {reviewBy} </p>
          
          <p> Critics Pick: {criticsPick} </p>
          <a href={linkToReview}>Click Here for full review  </a>
        </div>
      </div>
    </div>
  )
}


export default MovieReviews;
