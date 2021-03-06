import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllBooksReducer, getBookByIdReducer, addReviewReducer, deleteSpecificBookReducer, addSpecificBookReducer, updateSpecificBookReducer, newBooksReducer } from "../reducers/booksReducer";
import { addToCartReducer } from "../reducers/cartReducer";
import { registerUserReducer, userLoginReducer, userUpdateReducer, getInfoOfAllUsersReducer, deleteSpecificUserReducer } from "../reducers/usersReducer";
import { orderPaymentReducer, ordersByCustomerIdReducer, orderByIdReducer, allOrdersReducer } from "../reducers/ordersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const finalReducer= combineReducers({
    getAllBooksReducer: getAllBooksReducer,
    getBookByIdReducer: getBookByIdReducer,
    addToCartReducer: addToCartReducer,
    registerUserReducer: registerUserReducer,
    userLoginReducer: userLoginReducer,
    orderPaymentReducer: orderPaymentReducer,
    ordersByCustomerIdReducer: ordersByCustomerIdReducer,
    orderByIdReducer: orderByIdReducer,
    addReviewReducer: addReviewReducer,
    userUpdateReducer: userUpdateReducer,
    getInfoOfAllUsersReducer: getInfoOfAllUsersReducer,
    deleteSpecificUserReducer: deleteSpecificUserReducer,
    deleteSpecificBookReducer: deleteSpecificBookReducer,
    addSpecificBookReducer: addSpecificBookReducer,
    updateSpecificBookReducer: updateSpecificBookReducer,
    allOrdersReducer: allOrdersReducer,
    newBooksReducer: newBooksReducer

    });

const booksInCart = localStorage.getItem("booksInCart") ? JSON.parse(localStorage.getItem("booksInCart")) : [];
const activeUser= localStorage.getItem("activeUser") ? JSON.parse(localStorage.getItem("activeUser")) : null;
const firstState= { addToCartReducer : {book: booksInCart},
                    userLoginReducer: { activeUser: activeUser}
                    }
                    
const composeEnhancers = composeWithDevTools({
});
const store= createStore(finalReducer, firstState ,composeEnhancers(applyMiddleware(thunk)));

export default store;