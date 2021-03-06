const mongoose = require("mongoose");
const User= require("../models/userModel");
const bcrypt= require("bcrypt");

exports.registration= async (req, res)=>{
    try {
        const {name, email, password}=req.body;
        const matchuser=await User.findOne({email});
        if(matchuser){
            return res.status(406).json({error: "Email already registered!!"});
        }
        const hashedpwd= await bcrypt.hash(password, 10);
        const newuser= new User({
            name,
            email,
            password: hashedpwd
        });
        newuser.save().then(user => {
            //console.log(user);
            res.json(user)
            })
            .catch(error => res.status(406).json({error: error}));
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}

exports.loginuser= async (req, res)=>{
    try {
        const { email, password}=req.body;
        const matchuser=await User.findOne({email});
        if(!matchuser){
            return res.status(406).json({error: "No, This Email account doesn not exist!!"});
        }
        const matchpwd= await bcrypt.compare(password, matchuser.password);
        if(!matchpwd){
            return res.status(406).json({error: "Invalid Password"});
        }
        return res.json({name: matchuser.name, email: matchuser.email, _id: matchuser._id, adminrole: matchuser.adminrole});
        
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}


exports.updateuser= async (req, res)=>{
    try {
        const {updatedetails, userid}=req.body;
        
        const hashedpwd= await bcrypt.hash(updatedetails.password, 10);

        const userupdated= await User.findByIdAndUpdate(userid, {name: updatedetails.name, email: updatedetails.email, password: hashedpwd});
        if(userupdated){
            res.send("Updation of User was successful!!")
        }
        else{
            return res.status(406).json({error: error.message});
        }

    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}


exports.getallusers= async (req, res)=> {
    try {
        const users= await User.find();
        if(users){
            return res.send(users);
        }
        else{
            return res.status(406).json({error: error.message});
        }
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}

exports.deletespecificuser= async (req,res)=> {
    try {
        const id= req.params.userid;
        const deleteduser= await User.findByIdAndRemove(id);
        if(deleteduser){
            res.send("User has been deleted successfully");
        }
        else{
            return res.status(406).json({error: error.message});
        }
    } catch (error) {
        return res.status(406).json({error: error.message});
    }
}