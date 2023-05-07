import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="starting">
     <h1>WELCOME TO SHOPGENIE ADMIN PANEL</h1>
     <div className="boxes">
     <div className="products">
    <div> <h1>FOR PRODCUTS RELATED -</h1> </div>
    <button className="btn"><Link to='/admin_product'> PRODUCTS</Link></button>
    </div>
    <div className="users">
      <div> <h1>FOR USERS RELATED-</h1></div>
     <button className="btn">  <Link to='/admin_user'> USERS</Link> </button> 
    </div>
    <div className="analysis">
      <div><h1>FOR FINANCIAL ANALYSIS-</h1></div>
      <button className="btn"><Link to='/admin_analysis'> ANALYSIS</Link></button>
    </div>
     </div>
    </div>
    </>
  )
}

export default Home