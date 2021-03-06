import axios from 'axios';
export const orderPayment= (token, amttopay)=>async (dipatch, getState)=>{
    try {
        //get currently logged in user details
        const activeUser= getState().userLoginReducer.activeUser;
        //get all books in cart
        const bookInCart= getState().addToCartReducer.book;
        //creating a new array book item so that we can add the field that are necessary.
        const book= [];
        for(let eachbook of bookInCart){
            let bookitem={
                name: eachbook.name,
                copies: eachbook.copies,
                price: eachbook.price,
                _id: eachbook._id
            }
            book.push(bookitem);
        }

        const order={token, amttopay, activeUser, book};

        dipatch({type: "ORDER_PLACE_REQUEST"});
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/orders/orderplace`, order);
        console.log(response.data);
        dipatch({type: "ORDER_PLACE_SUCCESS"});
    } catch (error) {
        console.log(error);
        dipatch({type: "ORDER_PLACE_FAILED"});
    }

}

export const ordersByCustomerId= (customerid) =>async (dispatch) =>{
    try {
        dispatch({type: "ORDER_CUSTOMERID_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/orders/getordersbycustomerid/${customerid}`);
        console.log("orders:", response.data);
        dispatch({type: "ORDER_CUSTOMERID_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type: "ORDER_CUSTOMERID_FAILED", payload: error});
    }
}

export const orderById=(id)=> async (dispatch)=> {
    try {
        dispatch({type: "ORDER_ID_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/orders/getorderbyid/${id}`);
        //console.log("order details:", response.data);
        dispatch({type: "ORDER_ID_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type: "ORDER_ID_FAILED", payload: error});
    }
}


export const allOrdersAction=()=> async (dispatch)=> {
    try {
        dispatch({type: "ALL_ORDERS_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/orders/getallorders`);
        //console.log("order details:", response.data);
        dispatch({type: "ALL_ORDERS_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type: "ALL_ORDERS_FAILED", payload: error});
    }
}