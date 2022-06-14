import React, {useEffect} from 'react'
import { useSelector} from 'react-redux';
import Adminlinks from '../components/Adminlinks';
import Usersadmin from '../components/Usersadmin';
import Booksadmin from '../components/Booksadmin';
import Addbookadmin from "../components/Addbookadmin";
import Editbook from './Editbook';
import Ordersadmin from "../components/Ordersadmin";
import { Switch, Route, useHistory} from 'react-router-dom';
export default function Admin() {

  const history= useHistory();
  const activeuserstate= useSelector(state=> state.userLoginReducer);
  const {activeUser}= activeuserstate;

  useEffect(() => {
    if(activeUser){
      if(!activeUser.adminrole){
        history.push("/");
      }
    }
    else{
      history.push("/");
    }
  }, [])
  
  return (
    <div>
        <Adminlinks/>
        <Switch>
            <Route path="/admin/customerslist" component={Usersadmin}/>
            <Route path="/admin/bookslist" component={Booksadmin}/>
            <Route path="/admin/addnewbook" component={Addbookadmin} />
            <Route path="/admin/orderslist" component={Ordersadmin}/>
            <Route path="/admin/editbook/:bookid" component={Editbook}/>
        </Switch>
    </div>
  )
}
