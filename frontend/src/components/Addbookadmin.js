import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSpecificBook } from '../actions/booksAction';
import Loading from './Loading';
import Error from './Error';
import Success from './Success';
export default function Addbookadmin() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addbooksstate = useSelector(state => state.addSpecificBookReducer);
  const { error, loading, success } = addbooksstate;
  const submit = (event) => {
    event.preventDefault();
    const bookToAdd = {
      name: name,
      category: category,
      description: description,
      image: image,
      price: price,
      stock: stock
    }
    dispatch(addSpecificBook(bookToAdd));
    //console.log(bookToAdd);
  }
  return (
    <div className="registration">
      <div className='row w-100'>
        <div className='col-md-7 fullform'>
          <div className="form-section">
            <div className="title">
              <h3>Add A New Book</h3>
            </div>
            {error && (<Error errmsg={error} />)}
            {loading && (<Loading />)}
            {success && (<Success msg="Book added successfully!!" />)}
            <div className="registartion-form">
              <form method="POST" onSubmit={submit}>
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
                  <button type='submit' className='btn w-100'>ADD BOOK</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
