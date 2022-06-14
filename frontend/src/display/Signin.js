import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { userLogin } from '../actions/usersAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
export default function Signin() {
    const history= useHistory();
    const dispatch=useDispatch();
    const userLoginReducer= useSelector(state=>state.userLoginReducer);
    const { error, loading}= userLoginReducer;
    const [email, setEmail]=useState('');
    const [pwd, setPwd]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        const logindetails={
            email:email,
            password: pwd
        }
        const legal= dispatch(userLogin(logindetails));
        legal.then(data => {
            history.push("/");
            // window.location.href="/";
        }).catch(error=> {
            console.log(error);
        })

    }
    useEffect(() => {
      if(localStorage.getItem("activeUser")){
          history.push("/");
      }
    }, [])
    
  return (
    <div className="registration">
            <div className='row w-100'>
                <div className='col-md-7 fullform'>
                    <div className="form-section">
                        <div className="title">
                            <h3>Sign Into Your Account</h3>
                        </div>
                        {error && (<Error errmsg={error}/>)}
                        {loading && (<Loading/>)}
                        <div className="registartion-form">
                            <form method="POST" onSubmit={submit}>
                                <div className="form-group">
                                    <input type="email" className="form-control" required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" required placeholder='Password' value={pwd} onChange={(e)=> setPwd(e.target.value)} />
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="form-group">
                                    <button className='btn w-100'>Sign In</button>
                                </div>
                                <a href="/registration" className='m-2 text-dark'>Click here to Register</a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}
