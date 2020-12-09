// Code MovieReviews Here
import React from 'react';
const MovieReviews = (props)=>{
    const reviews = props.reviews;
    const listReviews = reviews.map((review) => 
        <div key={review.headline} className="review">
            <header>
                <a className="review-link" href={review.link.url}>
                    {review.headline}
                </a>
                <br/>
                <span className="author">{review.byline}</span>
            </header>
            <blockquote>{review.summary_short}</blockquote>
        </div>
    )
    console.log(listReviews)

return(
    <div className="review-list">
       {listReviews}
    </div>
    )
}
export default MovieReviews;