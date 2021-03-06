import axios from 'axios';
export const getAllBooksAction=()=> async (dispatch)=>{

    try {
        dispatch({type:'GET_BOOKS_REQUEST'});
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/books/getallbooks`);
        console.log(response.data);
        dispatch({type:'GET_BOOKS_SUCCESS', payload: response.data});
    } catch (error) {
        console.log("error is", error);
        dispatch({type:'GET_BOOKS_FAILED', payload: error});
    }
}

export const getSpecificBookByIdAction=(id)=> async (dispatch)=>{

    try {
        dispatch({type:'GET_BOOKBYID_REQUEST'});
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/books/getbookbyid/${id}`);
        console.log(response.data);
        dispatch({type:'GET_BOOKBYID_SUCCESS', payload: response.data});
    } catch (error) {
        console.log(error);
        dispatch({type:'GET_BOOKBYID_FAILED', payload: error});
    }
}

export const booksfilter=(filterdetails)=> async (dispatch)=> {
    try {
        const {searchname, category, price}= filterdetails;
        dispatch({type:'GET_BOOKS_REQUEST'});
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/books/getallbooks`);
        let booksfiltered=response.data;
        if(searchname){
            booksfiltered=booksfiltered.filter(book => book.name.toLowerCase().includes(searchname.toLowerCase()));
        }
        if(category!=='category'){
            booksfiltered= booksfiltered.filter(book => book.category.toLowerCase().includes(category));
        }
        if(price!=='price'){
            if(price==='fromhigh'){
                booksfiltered=booksfiltered.sort((x,y) => (y.price-x.price));
            }
            else if(price==='fromlow'){
                booksfiltered=booksfiltered.sort((x,y) => (x.price-y.price));
            }
        }
        dispatch({type:'GET_BOOKS_SUCCESS', payload: booksfiltered});
    } catch (error) {
        console.log(error);
        dispatch({type:'GET_BOOKS_FAILED', payload: error});
    }
}

export const addReview=(bookid, reviewobj)=> async (dispatch, getState)=>{
    try {
        const activeUser= getState().userLoginReducer.activeUser;
        dispatch({type: "ADD_REVIEW_REQUEST"});
        const reviewdetails= {reviewobj, bookid, activeUser};
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/books/addreview`, reviewdetails);
        console.log("add review response:", response.data);
        dispatch({type: "ADD_REVIEW_SUCCESS"});
        alert("Review submitted successfully!!");
        window.location.reload();
    } catch (error) {
        dispatch({type: "ADD_REVIEW_FAILED"});
    }
}


export const deleteSpecificBook=(id)=> async (dispatch)=> {
    try {
        dispatch({type: "DELETE_BOOKINFO_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/books/deletebook/${id}`);
        dispatch({type: "DELETE_BOOKINFO_SUCCESS"});
        alert("Book has been deleted Successfully!!");
        window.location.reload();
    } catch (error) {
        dispatch({type: "DELETE_BOOKINFO_FAILED", payload: error});
    }
}


export const addSpecificBook=(bookToAdd)=> async (dispatch)=> {
    try {
        dispatch({type: "ADD_BOOKINFO_REQUEST"});
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/books/addbook`, bookToAdd);
        dispatch({type: "ADD_BOOKINFO_SUCCESS"});
        //alert("Book has been added Successfully!!");
        window.location.reload();
    } catch (error) {
        dispatch({type: "ADD_BOOKINFO_FAILED", payload: error});
    }
}

export const updateSpecificBook=(bookupdated, bookid)=> async (dispatch)=> {
    try {
        dispatch({type: "UPDATE_BOOKINFO_REQUEST"});
        const updatedbookinfo = {bookid, bookupdated};
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/books/editbook`, updatedbookinfo);
        dispatch({type: "UPDATE_BOOKINFO_SUCCESS"});
        window.location.href="/admin/bookslist";
    } catch (error) {
        dispatch({type: "UPDATE_BOOKINFO_FAILED", payload: error});
    }
}

export const newBooksAction=()=> async (dispatch)=> {
    try {
        dispatch({type: "NEW_BOOKSINFO_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/books/newarrival`);
        dispatch({type: "NEW_BOOKSINFO_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type: "NEW_BOOKSINFO_FAILED", payload: error});
    }
}