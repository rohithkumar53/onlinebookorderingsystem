import React, {useState} from 'react'
import { booksfilter } from '../actions/booksAction';
import { useDispatch} from 'react-redux';
export default function Search() {
    const [searchname, setSearchname]=useState("");
    const [category, setCategory]= useState("category");
    const [price, setPrice]= useState("price");
    const dispatch= useDispatch();

    const handlebooksfilter=()=>{

        const filterdetails={
            searchname,
            category,
            price
        }
        dispatch(booksfilter(filterdetails));
    }

    return (
        <div className='row justify-content-center border border-dark bg-dark text-light'>
            <div className='col-md-3'>
                <div className='form-group mt-2'>
                    <input type="text" className="form-control" placeholder='Search Book' value={searchname} onChange={(e)=> setSearchname(e.target.value)} />
                </div>
            </div>

            <div className='col-md-2'>
                <div className='form-group mt-2'>
                    <select className='w-100 py-2'value={category} onChange={(e)=> setCategory(e.target.value)}>
                        <option value="category">Category</option>
                        <option value="react">React</option>
                        <option value="php">Php</option>
                        <option value="datastructures">Data Strcutures</option>
                        <option value="sql">SQL</option>
                    </select>
                </div>
            </div>

            <div className='col-md-2'>
                <div className='form-group mt-2'>
                    <select className='w-100 py-2' value={price} onChange={(e)=> setPrice(e.target.value)}>
                        <option value="price">Price</option>
                        <option value="fromhigh">High to Low</option>
                        <option value="fromlow">Low to High</option>
                    </select>
                </div>
            </div>

            <div className='col-md-2'>
                <div className="form-group mt-2">
                    <button type='submit' className='btn btn-secondary w-100' onClick={handlebooksfilter}>Filter</button>
                </div>
            </div>
        </div>
    )
}
