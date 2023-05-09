import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import "./Analysis.css";
const Analysis = () => {
  const [cartdata, setCartdata] = useState([]);
  const [x, setx] = useState({});
  const [y, sety] = useState({});
  const [z, setz] = useState(0);
  //  var x,y,z,data;
  var data;
  const getdatabuy = async () => {
    const res = await fetch("http://localhost:8005/admin/analysis", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const obj = await res.json();
    console.log(obj);
    const  {proarr,x,y,z}=obj;
     data =proarr;
     setx(x);
     sety(y);
     setz(z);
    if (res.status !== 200) {
      alert("No data available");
    } else {
     
      console.log("x is"+x);
      console.log("y is"+y);
      console.log("z is"+z);
      console.log("data is "+data);
       await  setCartdata(data);
      console.log("yes1");
      console.log("yes2");
    }
  };

  const calculation =  () => {
   
  };
  useEffect(() => {
    getdatabuy();
  }, []);
  // console.log(x,y,z);

  console.log("value" + z);
  console.log(x, y);
  cartdata.map((e, ind) => {});
  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>PRODUCTS AND THIER SALES ANALYSIS</h1>
              <Divider />
              <span>
                <h1> NO OF BUY'S </h1>
              </span>
              <Divider />
              <h1>MAXIMUM SOLD PRODUCT</h1>
              {y && (
                <div className="item_containert">
                  <img src={y.detailUrl} alt="imgitem" />
                  <div className="item_details">
                    <h3>{y.title.longTitle}</h3>
                    <h3>{y.title.shortTitle}</h3>
                    <h3 className="diffrentprice">₹{y.price.cost}.00</h3>
                    <p className="unusuall" style={{ fontSize: "19px" }}>
                      Usually dispatched in 8 days.
                    </p>
                    <p>Eligible for FREE Shipping</p>
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                      alt="logo"
                    />
                  </div>
                  <h3 className="item_price">{y.no_of_times}</h3>
                </div>
              )}
              <Divider />
              <h1>MINIMUM SOLD PRODUCT</h1>
              {x && (
                <div className="item_containert">
                  <img src={x.detailUrl} alt="imgitem" />
                  <div className="item_details">
                    <h3>{x.title.longTitle}</h3>
                    <h3>{x.title.shortTitle}</h3>
                    <h3 className="diffrentprice">₹{x.price.cost}.00</h3>
                    <p className="unusuall" style={{ fontSize: "19px" }}>
                      Usually dispatched in 8 days.
                    </p>
                    <p>Eligible for FREE Shipping</p>
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                      alt="logo"
                    />
                  </div>
                  <h3 className="item_price">{x.no_of_times}</h3>
                </div>
              )}

              <h1>DETAILS OF EACH PRODUCT-</h1>
              {cartdata.map((e, ind) => {
                return (
                  <>
                    <div className="item_containert" key={ind}>
                      <img src={e.detailUrl} alt="imgitem" />
                      <div className="item_details">
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                        <p className="unusuall" style={{ fontSize: "19px" }}>
                          Usually dispatched in 8 days.
                        </p>
                        <p>Eligible for FREE Shipping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                      </div>
                      <h3 className="item_price">{e.no_of_times}</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}
              <h1>TOTAL SALES OF ALL PRODUCTS</h1>
              <div className="item_containert">
                <h3 className="item_price">{z}</h3>
              </div>
              <Divider />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Analysis;
