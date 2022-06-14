const Book= require('../models/bookModel');


exports.findBooks= async (req, res) =>{
    try {
        const books = await Book.find({});
        if(!books){
            return res.status(406).json({message: "No books present!!"});
        }
        else{
            return res.send(books);
        }
    } catch (error) {
        return res.status(400).json({error: error});
    }

}

exports.findBookById= async (req, res)=>{
    try {
        const id= req.params.bookid;
        const book= await Book.findById(id);
        if(!book){
            return res.status(406).json({message: "No book found with that ID!!"})
        }
        else{
            res.send(book);
        }
    } catch (error) {
        return res.status(400).json({error: error});
    }
}

exports.addreview= async (req, res)=> {
    try {
        const {reviewobj, bookid, activeUser}= req.body;
        const book= await Book.findById(bookid);
        const review = {
            userid: activeUser._id,
            name: activeUser.name,
            rating: reviewobj.rating,
            comment: reviewobj.review
        }

        // first we are pushing the review to the reviews array
        book.reviews.push(review);
        
        // now we have to loop through reviews array to calculate the overall rating
        let ratingrevised=0;
        book.reviews.forEach(eachreview => {
            ratingrevised=eachreview.rating+ ratingrevised;
        });
        ratingrevised= ratingrevised/ book.reviews.length;

        //now we assign the calculated overall rating to the rating 
        book.rating=ratingrevised;

        book.save().then(boo => {
            return res.send("Your review saved and submitted successfully!!!");
        }).catch(error => res.status(400).json({message: "Review not submitted, something went wrong!!"}));
    } catch (error) {
        return res.status(400).json({error: error});
    }
}


exports.deletespecificbook= async (req,res)=> {
    try {
        const id= req.params.bookid;
        const deletedbook= await Book.findByIdAndRemove(id);
        if(deletedbook){
            res.send("Book has been deleted successfully!!");
        }
        else{
            return res.status(406).json({error: error.message});
        }
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}

exports.addspecificbook=(req, res)=>{
    try {
        const {name, price, image, description, stock, category}=req.body;
        const book = new Book({
            name: name,
            category: category,
            image: image,
            description: description,
            price: price,
            stock: stock
        });
        book.save().then(boo => {
            return res.send("You have added the book successfully!!!");
        }).catch(error => res.status(400).json({message: "Book not added, something went wrong!!"}));
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}


exports.editspecificbook= async (req, res)=>{
    try {
        const {bookid, bookupdated}=req.body;
        const updatedbook= await Book.findByIdAndUpdate(bookid, {
            name: bookupdated.name,
            category: bookupdated.category,
            image: bookupdated.image,
            description: bookupdated.description,
            price: bookupdated.price,
            stock: bookupdated.stock
        });
        if(updatedbook){
            res.send("Book has been updated successfully!!");
        }
        else{
            return res.status(406).json({error: error.message});
        }
        
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}

exports.newarrival=async (req, res)=> {
    try {
        const newbooks= await Book.find().sort({createdAt: -1}).limit(3);
        if(newbooks){
            res.send(newbooks);
        }
        else{
            return res.status(406).json({error: error.message});
        }
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}