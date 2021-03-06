import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
export default function Book({ eachbook }) {
    return (

        <Link to={`description/${eachbook._id}`}>
            <img src={eachbook.image} className="img-fluid img-thumbnail w-75 mx-5 my-2" />
            <h1>{eachbook.name}</h1>

            {/* <ReactStars
                edit={false}
                value={eachbook.rating}
                count={5}
                size={25}
                color={'yellow'} /> */}
            <Rating  size={25} initialValue={eachbook.rating} readonly={true}/>
            <h1>Price: {eachbook.price}</h1>
        </Link>
    )
}
