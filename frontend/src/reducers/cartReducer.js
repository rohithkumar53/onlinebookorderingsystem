export const addToCartReducer=(state={book: []}, action) => {
    const {type, payload}= action;
    switch(type){
        case 'ADD_TO_CART': {
            const bookexists = state.book.find(eachbook => eachbook._id === payload._id);
            if(bookexists){
                return {
                    ...state,
                    book: state.book.map(eachbook => eachbook._id === payload._id ? payload : eachbook)
                    
                }
            }
            else{
                return {
                    ...state,
                    book : [...state.book, payload]
                }
            }
        }
        case 'DELETE_FROM_CART': {
            return {
                ...state,
                book: state.book.filter(eachbook => eachbook._id!==payload._id)
            }
        }
        default: return state;
    }
}