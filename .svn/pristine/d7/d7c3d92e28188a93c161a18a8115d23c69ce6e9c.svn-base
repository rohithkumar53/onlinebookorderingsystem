import axios from "axios";

export const registerUser=(registerdetails)=> async (dispatch)=>{

    try {
        dispatch({type: "REGISTER_USER_REQUEST"});
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/registration`, registerdetails);
        //console.log(response.data);
        dispatch({type: "REGISTER_USER_SUCCESS"});
        return Promise.resolve(response.data);
    } catch (error) {
        //console.log("from inside actions page error",error);
        dispatch({type: "REGISTER_USER_FAILED", payload: error});
        return Promise.reject(error);
    }
}

export const userLogin=(logindetails)=> async (dispatch)=>{

    try {
        dispatch({type: "LOGIN_USER_REQUEST"});
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/login`, logindetails);
        //console.log(response.data);
        dispatch({type: "LOGIN_USER_SUCCESS", payload: response.data});
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch({type: "LOGIN_USER_FAILED", payload: error});
        return Promise.reject(error);
    }
}


export const userLogout=()=>(dispatch)=>{

    try {
        localStorage.removeItem('booksInCart');
        localStorage.removeItem('activeUser');
        dispatch({type: 'LOGOUT_USER'});
        window.location.href="/login"
    } catch (error) {
        dispatch({type: "LOGOUT_FAILED"});
        console.log(error);
    }
}

export const userUpdate=(updatedetails, userid)=> async (dispatch)=> {
    try {
        const updationinfo={updatedetails, userid};
        dispatch({type: "UPDATE_USER_REQUEST"});
        const response= await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/update`, updationinfo);
        //console.log(response.data);
        dispatch({type: "UPDATE_USER_SUCCESS"});
        return Promise.resolve(response.data);
    } catch (error) {
        //console.log("from inside actions page error",error);
        dispatch({type: "UPDATE_USER_FAILED", payload: error});
        return Promise.reject(error);
    }
}

export const getInfoOfAllUsers=()=> async (dispatch)=> {
    try {
        dispatch({type: "GET_USERSINFO_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/users/getallusers`);
        dispatch({type: "GET_USERSINFO_SUCCESS", payload: response.data});

    } catch (error) {
        dispatch({type: "GET_USERSINFO_FAILED", payload: error});
    }
}

export const deleteSpecificUser=(id)=> async (dispatch)=> {
    try {
        dispatch({type: "DELETE_USERINFO_REQUEST"});
        const response= await axios.get(`${process.env.REACT_APP_BACKEND}/api/users/deleteuser/${id}`);
        dispatch({type: "DELETE_USERINFO_SUCCESS"});
        alert("Customer has been deleted Successfully!!");
        window.location.reload();
    } catch (error) {
        dispatch({type: "DELETE_USERINFO_FAILED", payload: error});
    }
}