import React from "react";
import "./Product_home.css";
import Delete from "./Delete";
import { useEffect, useState } from "react";
import { getProducts } from "../redux_admin/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Link } from 'react-router-dom';
const Product_home = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {products.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>
                Welcome to ShopGenie Admin Panel Here you can Add,Delete and
                Edit Product
              </h1>
               
               <Divider />
               <br />
               <br />
              <div style={{  alignContent:"center" }} className="right_buys">
              <div className="add_remove_select">
                <Link style={{ cursor: "pointer", fontSize: "25px" , alignContent:"center" }}to='/admin_add_product'> ADD A PRODUCT</Link>
                <p ></p>
              </div>
            </div>
            <br />
            <br />
             <Divider />
              {products.map((e, ind) => {
                return (
                  <>
                    <div className="item_containert" key={ind}>
                      <img src={e.detailUrl} alt="imgitem" />
                      <div className="item_details">
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                        <Delete
                          deletedata={e._id}
                          //  get={getdatabuy}
                        />
                      </div>
                      <h3 className="item_price">₹{e.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
            
          </div>
        </div>
      ) : (
        <div>No products there</div>
      )}
    </>
  );
};

export default Product_home;
