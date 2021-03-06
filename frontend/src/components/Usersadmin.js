import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoOfAllUsers } from '../actions/usersAction';
import Loading from './Loading';
import Error from './Error';
import { deleteSpecificUser } from '../actions/usersAction';
export default function Usersadmin() {
  const dispatch = useDispatch();
  const allusers = useSelector(state => state.getInfoOfAllUsersReducer);
  const { loading, users, error } = allusers;
  //console.log(users);
  useEffect(() => {
    dispatch(getInfoOfAllUsers());
  }, [])

  return (
    <div className='row '>
      <div className='col-md-7 mx-auto my-5'>
        <h2 className='m-3 text-center'>CUSTOMERS LIST</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (<Loading />) : (error ? (<Error errmsg="Something went wrong!!!" />) : users && users.map((eachuser,index) => {
              return <tr key={index}>
                <td>{eachuser.name}</td>
                <td>{eachuser.email}</td>
                <td>{eachuser._id}</td>
                <td><i className="fa-solid fa-trash-can" onClick={(e) => dispatch(deleteSpecificUser(eachuser._id))}></i></td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
