import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificBookByIdAction, updateSpecificBook } from '../actions/booksAction'
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';
export default function Editbook({ match }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const specificbookstate = useSelector(state => state.getBookByIdReducer);
    const updatedbookstate= useSelector(state=> state.updateSpecificBookReducer);
    const { loading, error, book } = specificbookstate;
    useEffect(() => {
        if (book) {
            if (match.params.bookid==book._id) {
                setName(book.name);
                setPrice(book.price);
                setStock(book.stock);
                setCategory(book.category);
                setDescription(book.description);
                setImage(book.image);
            }
            else {
                dispatch(getSpecificBookByIdAction(match.params.bookid));
            }
        }
        else {
            dispatch(getSpecificBookByIdAction(match.params.bookid));
        }



    }, [dispatch, book])

    const submitForEdit = (event) => {
        event.preventDefault();
        const bookupdated={
            name: name,
            category: category,
            stock: stock,
            price: price,
            image: image,
            description: description
        }
        dispatch(updateSpecificBook(bookupdated, match.params.bookid));
    }
    return (
        <div className="registration">
            <div className='row w-100'>
                <div className='col-md-7 fullform'>
                    <div className="form-section">
                        <div className="title">
                            <h3>Edit the Book</h3>
                        </div>
                        {error && (<Error errmsg={error} />)}
                        {loading && (<Loading />)}
                        {updatedbookstate.loading && (<Loading />)}
                        {updatedbookstate.error && (<Error errmsg={updatedbookstate.error} />)}
                        {updatedbookstate.success && (<Success msg="Book has been updated successfully!!"/>)}
                        <div className="registartion-form">
                            <form method="POST" onSubmit={submitForEdit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Category' required value={category} onChange={(e) => setCategory(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Image URL' required value={image} onChange={(e) => setImage(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Description' required value={description} onChange={(e) => setDescription(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Price' required value={price} onChange={(e) => setPrice(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Stock' required value={stock} onChange={(e) => setStock(e.target.value)} />

                                </div>
                                <div className="form-group">
                                    <button type='submit' className='btn w-100'>EDIT BOOK</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
