import React from 'react'
import { useEffect } from 'react';
import Book from '../components/Book';
import Newbooks from '../components/Newbooks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooksAction } from '../actions/booksAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Search from '../components/Search';
export default function Home() {
    const dispatch = useDispatch();
    const BooksState = useSelector(state => state.getAllBooksReducer);

    const { books, loading, error } = BooksState;
    //useeffect hook is used to load the books data from database backend
    useEffect(() => {

        dispatch(getAllBooksAction());
    }, [])


    return (
        <div>
            <Search />
            <Newbooks/>
            <div className='row justify-content-center mx-2'>

                {loading ? (<Loading />) : (error ? (<Error errmsg="Something went wrong!!!" />) : books.map(eachbook => {
                    return <div className='col-md-3 m-3 p-2 shadow bg-white rounded card' key={eachbook._id}>
                        <Book eachbook={eachbook} />
                    </div>
                }))}

                {/* {books.map(eachbook => {
                return <div className='col-md-3 m-3 p-2 card' key={eachbook._id}>
                    <Book eachbook={eachbook} />
                </div>
            })} */}

            </div>
        </div>
    )
}
