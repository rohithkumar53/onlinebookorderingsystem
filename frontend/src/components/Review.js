import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../actions/booksAction';
import {useHistory} from 'react-router-dom';
export default function Review({ book }) {

    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector(state => state.userLoginReducer);
    const { activeUser } = user;
    //console.log(rating);
    const handleReview = () => {
        if (activeUser) {
            let reviewed;
            for (let eachreview of book.reviews) {
                if (eachreview.userid == activeUser._id) {
                    reviewed = true;
                }
            }

            if (reviewed) {
                alert("You already reviewed this book");
            }
            else {
                const reviewobj = {
                    rating: rating,
                    review: review
                }
                dispatch(addReview(book._id, reviewobj));
            }
        }
        else{
            history.push("/login");
        }


    }
    return (
        <div>
            <h2>Share Your Review:</h2>
            <Rating size={25} onClick={(e) => setRating(e / 20)} initialValue={rating} />
            <input type="text" placeholder='Leave a comment' className='my-1 form-control' onChange={(e) => setReview(e.target.value)} />
            <button type="submit" className='btn btn-dark my-1' onClick={handleReview}>Submit</button>
            <hr />
            <h2 className='mb-1'>Book Reviews:</h2>
            {book.reviews && book.reviews.map(eachreview => {
                return <div>
                    <b className='mr-1'>{eachreview.name} :</b>
                    <Rating size={25} initialValue={eachreview.rating} readonly={true} />
                    <p>{eachreview.comment}</p>
                    <hr />
                </div>
            })}
        </div>
    )
}
