import './index.css';
import './App.css';
import {Routes,Route} from "react-router-dom"
import AdminFooter from './Components_Admin/Admin_footer/Admin_footer'
import Adminheader from './Components_Admin/Admin_Header/Admin_header'
import Log_in from './Components_Admin/Log_In/Log_in'
import Home from './Components_Admin/Home/Home'
import Product_home from "./Components_Admin/Products/Product_home"
import User_home from "./Components_Admin/User/User_Home"
import Analysis_home from "./Components_Admin/Analysis_fol/Analysis"
import Product_add from './Components_Admin/Products/Product_add';
import Product_edit from './Components_Admin/Products/Product_edit';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
// import CircularProgress from '@mui/material/CircularProgress';
function App() {
  return (
    <>
     <Adminheader/>
    <Routes>
        <Route path="/" element ={<Log_in/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/admin_product" element ={<Product_home/>}/>
        <Route path="/admin_user" element ={<User_home/>}/>
        <Route path="/admin_analysis" element ={<Analysis_home/>}/>
        <Route path="/admin_add_product" element ={<Product_add/>}/>
        <Route path="/admin_edit_product/:pro_id" element ={<Product_edit/>}/>
    </Routes>
    <ToastContainer/>
    <AdminFooter/>
    </>
   
   

  );
}

export default App;
