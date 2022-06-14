import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/usersAction';
//import {useHistory} from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
export default function Signup() {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [pwd, setPwd]=useState('');
    const [verifypwd, setVerifypwd]=useState('');
    // const history= useHistory();
    const dispatch=useDispatch();
    const {loading, error, success}= useSelector(state=> state.registerUserReducer);
    const submit=(event)=>{
        event.preventDefault();
        const registerdetails={
            name:name,
            email:email,
            password: pwd,
        }
        if(pwd===verifypwd){
            console.log(registerdetails);
            const legal=dispatch(registerUser(registerdetails));
            legal.then(data => {
                // history.push("/login");
                console.log('regsitered success');
                }).catch(error => {
                    console.log(error);
                })
        }else{
            alert('Your passwords do not match!!!');
        }
    }
    return (
        <div className="registration">
            <div className='row w-100'>
                <div className='col-md-7 fullform'>
                    <div className="form-section">
                        <div className="title">
                            <h3>Create A New Account</h3>
                        </div>
                        {error && (<Error errmsg={error}/>)}
                        {loading && (<Loading/>)}
                        {success && (<Success msg="User registered successfully!!"/>)}
                        <div className="registartion-form">
                            <form method="POST" onSubmit={submit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Name' required value={name} onChange={(e)=> setName(e.target.value)} />
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder='Email' required value={email} onChange={(e)=> setEmail(e.target.value)} />
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder='Password' required value={pwd} onChange={(e)=> setPwd(e.target.value)} />
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder='Verify Password' required value={verifypwd} onChange={(e)=> setVerifypwd(e.target.value)} />
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="form-group">
                                    <button type='submit' className='btn w-100'>Register</button>
                                </div>
                                <a href="/login" className='text-dark'>Click here to Login</a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
