import React from "react";
import "./User_Home.css";
import Delete_user from "./Delete_user";
import { useEffect, useState } from "react";
import { getProducts,getusers } from "../redux_admin/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Link } from 'react-router-dom';
import profile_logo from "../../photos/profile_logo.png"
const User_Home = () => {
  const { users } = useSelector((state) => state.getusersdata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  console.log("hey i am here"+users);
  return (
    <>
      {users.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>
                Welcome to ShopGenie Admin Panel Here you can Delete and
                Edit User
              </h1>
              <span>
                <h1> NO OF BUY'S </h1>
              </span>
               <Divider />
              {users.map((e, ind) => {
                return (
                  <>
                    <div className="item_containert" key={ind}>
                    <img src={profile_logo}alt="" />
                      <div className="item_details">
                        <h3>{e.email}</h3>
                        <h3>{e.mobile}</h3>
                        <Delete_user
                          deletedata={e._id}
                          //  get={getdatabuy}
                        />
                      </div>
                      <h3 className="item_price">{e.carts.length}</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
            
          </div>
        </div>
      ) : (
        <div>No Users there</div>
      )}
    </>
  );
};

export default User_Home;
