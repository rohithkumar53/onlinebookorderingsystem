const mongoose= require("mongoose");

const connection= async () =>{
    try {
        const db=await mongoose.connect(process.env.DBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB is successfully connected to host: ${db.connection.host}`);
    } catch (error) {
        console.log(error);
        //exit the whole connection process
        process.exit(1);
    }
}
module.exports=connection;