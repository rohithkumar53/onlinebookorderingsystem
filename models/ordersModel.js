const mongoose= require("mongoose");

const ordersSchema= mongoose.Schema({
    customerid:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderedbooks: [{
        name:{
            type: String,
            required: true
        },
        copies: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        _id: {
            type: String,
            required: true
        }

    }],
    shippingaddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        }
    },
    orderbillamount: {
        type: Number,
        required: true
    },
    delivered: {
        type: Boolean,
        required: true
    },
    transactionid: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const Orders= mongoose.model("orders", ordersSchema);
module.exports= Orders;