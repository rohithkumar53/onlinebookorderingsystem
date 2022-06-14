import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newBooksAction } from '../actions/booksAction';
import Loading from './Loading';
import Error from './Error';
export default function Newbooks() {
    const dispatch = useDispatch();
    const newbooksstate = useSelector(state => state.newBooksReducer);
    const { newbooks, loading, error } = newbooksstate;
    useEffect(() => {
        dispatch(newBooksAction());
    }, [])

    return (
        <div>
            {loading ? (<Loading />) : (error ? (<Error errmsg={error} />) : newbooks.length && (
                <div className='row justify-content-center bg-dark'>
                    <div className='col-md-6'>
                        <h2 className='text-white'>Our Latest Arrivals</h2>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner justify-content-center">
                                <div className="carousel-item active mb-2">
                                    <img className=" img-fluid img-thumbnail" src={newbooks[0].image} alt="First slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{newbooks[0].name}</h5>
                                    </div>
                                </div>
                                <div className="carousel-item mb-2">
                                    <img className=" img-fluid img-thumbnail" src={newbooks[1].image} alt="Second slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{newbooks[1].name}</h5>
                                    </div>
                                </div>
                                <div className="carousel-item mb-2">
                                    <img className="img-fluid img-thumbnail" src={newbooks[2].image} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{newbooks[2].name}</h5>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
            ))}
        </div>


    )
}
