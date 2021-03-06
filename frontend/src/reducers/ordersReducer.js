export const orderPaymentReducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case "ORDER_PLACE_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ORDER_PLACE_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false
            }
        case "ORDER_PLACE_FAILED":
            return {
                ...state,
                error: true,
                loading: false

            }
        default:
            return state
    }
}

export const ordersByCustomerIdReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ORDER_CUSTOMERID_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ORDER_CUSTOMERID_SUCCESS":
            return {
                ...state,
                loading: false,
                orders: payload,
                error: false
            }
        case "ORDER_CUSTOMERID_FAILED":
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        default:
            return state;
    }
}

export const orderByIdReducer =(state={}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "ORDER_ID_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ORDER_ID_SUCCESS":
            return {
                ...state,
                loading: false,
                order: payload,
                error: false
            }
        case "ORDER_ID_FAILED":
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        default:
            return state;
    }
}


export const allOrdersReducer =(state={orders:[]}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "ALL_ORDERS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ALL_ORDERS_SUCCESS":
            return {
                ...state,
                loading: false,
                orders: payload,
                error: false
            }
        case "ALL_ORDERS_FAILED":
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        default:
            return state;
    }
}