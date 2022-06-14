import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
import { userUpdate } from '../actions/usersAction';
export default function User() {

    const dispatch=useDispatch();
    const user= useSelector(state=> state.userLoginReducer);
    const {activeUser}= user;

    const [name, setName]=useState(activeUser.name);
    const [email, setEmail]=useState(activeUser.email);
    const [pwd, setPwd]=useState('');
    const [verifypwd, setVerifypwd]=useState('');
    const {loading, error, success}= useSelector(state=> state.userUpdateReducer);
    const submit=(event)=>{
        event.preventDefault();
        const updatedetails={
            name:name,
            email:email,
            password: pwd,
        }
        if(pwd===verifypwd){
            //console.log(registerdetails);
            const legal=dispatch(userUpdate(updatedetails, activeUser._id));
            legal.then(data => {
                // history.push("/login");
                console.log('updation success');
                window.location.reload();
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
                            <h3>Update Your Account</h3>
                        </div>
                        {error && (<Error errmsg="User could not be updated something is wrong!!!"/>)}
                        {loading && (<Loading/>)}
                        {success && (<Success msg="User updated successfully!!"/>)}
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
                                    <button type='submit' className='btn w-100'>Update</button>
                                </div>
                    
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}
