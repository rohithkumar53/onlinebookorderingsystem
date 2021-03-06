const mongoose = require("mongoose");

const bookSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true
    },
    reviews: [
        {
            userid: {
                type: mongoose.Schema.Types.ObjectId
            },
            name:{
                type: String,
                required: true
            },
            rating:{
                type:  Number,
                required: true
            },
            comment: {
                type: String
            }
        }
    ]
}, {
    timestamps: true
});
const Book= mongoose.model('books', bookSchema);
module.exports= Book;