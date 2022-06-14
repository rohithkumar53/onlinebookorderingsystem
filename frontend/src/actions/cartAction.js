export const addToCart=(book, bookCopies)=> (dispatch, getState) =>{

    const booksInCart={
        name: book.name,
        stock: book.stock,
        copies: bookCopies,
        _id: book._id,
        price: book.price,
    }
    dispatch({type: 'ADD_TO_CART', payload: booksInCart});
    const bookarr= JSON.stringify(getState().addToCartReducer.book);
    localStorage.setItem("booksInCart", bookarr);
}

export const deleteBookFromCart=(book)=> (dispatch, getState) =>{

    dispatch({type: "DELETE_FROM_CART", payload: book});
    const bookarr= JSON.stringify(getState().addToCartReducer.book);
    localStorage.setItem("booksInCart", bookarr);
}