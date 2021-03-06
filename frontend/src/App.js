import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './display/Home';
import Description from './display/Description';
import Cart from './display/Cart';
import Signin from './display/Signin';
import Signup from './display/Signup';
import Orders from './display/Orders';
import Admin from './display/Admin';
import User from './display/User';
//import Newbooks from './components/Newbooks';
import Orderdetails from './display/Orderdetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Route path='/' component={Home} exact/>
        <Route path="/description/:id" component={Description}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Signin}/>
        <Route path="/registration" component={Signup}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/profile" component={User}/>
        <Route path="/orderdetails/:orderid" component={Orderdetails}/>
        <Route path="/admin" component={Admin}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
