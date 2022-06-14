const initialState={books:[], loading:false}
export const getAllBooksReducer=(state=initialState, action)=>{
    const {type, payload}=action;
    switch(type){
        case "GET_BOOKS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_BOOKS_SUCCESS":
            return {
                ...state,
                books: payload,
                loading: false
            }
        case "GET_BOOKS_FAILED":
            return {
                ...state,
                loading: false,
                error: payload.message
            }
        default:
            return state
    }
} 


export const getBookByIdReducer=(state={book: {}}, action)=>{
    const {type, payload}=action;
    switch(type){
        case "GET_BOOKBYID_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_BOOKBYID_SUCCESS":
            return {
                ...state,
                book: payload,
                loading: false
            }
        case "GET_BOOKBYID_FAILED":
            return {
                ...state,
                loading: false,
                error: payload.message
            }
        default:
            return state
    }
} 

export const addReviewReducer=(state={}, action)=> {
    const { type}= action;
    switch(type){
        case "ADD_REVIEW_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ADD_REVIEW_SUCCESS":
            return {
                ...state,
                loading: false,
                success: true
            }
        case "ADD_REVIEW_FAILED":
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}


export const deleteSpecificBookReducer=(state={}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "DELETE_BOOKINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "DELETE_BOOKINFO_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,

            }
        case "DELETE_BOOKINFO_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}



export const addSpecificBookReducer=(state={}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "ADD_BOOKINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ADD_BOOKINFO_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,

            }
        case "ADD_BOOKINFO_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}


export const updateSpecificBookReducer=(state={}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_BOOKINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "UPDATE_BOOKINFO_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,

            }
        case "UPDATE_BOOKINFO_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}

export const newBooksReducer= (state={newbooks:[]}, action) =>{
    const { type, payload } = action;
    switch (type) {
        case "NEW_BOOKSINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "NEW_BOOKSINFO_SUCCESS":
            return {
                ...state,
                success: true,
                newbooks: payload,
                loading: false,
                error: false

            }
        case "NEW_BOOKSINFO_FAILED":
            return {
                ...state,
                error: "something gone wrong!!",
                loading: false
            }
        default: return state;
    }
}