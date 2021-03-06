const { v4: uuidv4 } = require('uuid');
const stripe= require("stripe")(`${process.env.secretKey}`);
const Orders= require("../models/ordersModel");
exports.orderPayment= async (req, res)=>{
    try {
        const {token, amttopay, activeUser, book}= req.body;

        const user= await stripe.customers.create({
            email: token.email,
            description: "placing my books order",
            source: token.id
        });

        const paymentmade= await stripe.charges.create({
            amount: amttopay*100,
            currency: 'gbp',
            customer: user.id,
            receipt_email: token.email

        }, {idempotencyKey: uuidv4()});

        if(paymentmade){
            const neworder= new Orders({
                customerid: activeUser._id,
                name: activeUser.name,
                email: activeUser.email,
                orderedbooks: book,
                shippingaddress: {
                    address: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                orderbillamount: amttopay,
                delivered: false,
                transactionid: paymentmade.source.id,
            });

            neworder.save().then(order => {
                res.send("Hurray!! Your order saved and placed successfully!!");
            }).catch(error => res.status(406).json({msg: "Something went wrong"}));
        }

    } catch (error) {
        res.status(400).json({message: "Your payment has been failed!!"});
        
    }

}

exports.ordersByCustomerId=async (req, res)=> {
    try {
        const id= req.params.customerid;
        const orders= await Orders.find({customerid: id}); 
        if(!orders){
            return res.status(406).json({message: "No orders found with that ID!!"});
        }
        else{
            res.send(orders);
        }
    } catch (error) {
        res.status(400).json({message: "Your orders couldn't be fetched!!"});
    }
}

exports.orderById=async (req, res)=> {
    try {
        const id= req.params.orderid;
        const order= await Orders.find({_id: id});
        if(!order){
            return res.status(406).json({message: "No order found with that ID!!"})
        }
        else{
            res.send(order[0]);
        }
    } catch (error) {
        res.status(400).json({message: "Your order details couldn't be fetched!!"});
    }
}

exports.getallorders=async (req,res)=>{
    try {
        const orders= await Orders.find();
        if(orders){
            res.send(orders);
        }
        else{
            return res.status(400).json({message: "Orders couldn't be fetched, something went wrong!!"});
        }
    } catch (error) {
        return res.status(400).json({message: "Your orders couldn't be fetched, something went wrong!!"});
    }
}