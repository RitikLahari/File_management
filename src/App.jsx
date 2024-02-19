import './App.css'
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Homepage from "./pages/homepage/Homepage";
import {Route,Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/Dashboard";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkIsLoggedIn } from './redux/actionCreator/authActioncreator';
import  {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const App =()=> {

 const dispatch=useDispatch();

 useEffect(()=>{
  dispatch(checkIsLoggedIn());
 },[]);


 return (
    <div className='App'>
       <ToastContainer/>
       <Routes>
         <Route path='/' element={<Homepage/>}> </Route>
         <Route path='/login' element={<Login/>}> </Route>
         <Route path='/register' element={<Register/>}> </Route>
         <Route path='/dashboard/*' element={<DashboardPage/>}> </Route>
       </Routes>
    </div>
  );
};

export default App;
