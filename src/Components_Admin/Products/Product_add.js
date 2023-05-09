import React, { useState } from 'react'
import { Divider } from '@mui/material';
import "./Product_add.css";
import { NavLink } from 'react-router-dom' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sign_up = () => {
  const [udata, setUdata] = useState({
    id: "",
    url: "",
    detailUrl: "",
    title: {},
    price: {},
    description: "",
    discount: "",
    tagline: "",
    no_of_times:"",

});
    
const adddata = (e) => {
  const { name, value } = e.target;

  setUdata((pre) => {
      return {
          ...pre,
          [name]: value
      }
  })
};
const senddata = async (e) => {
    // It prevents reloading page on clicking
    e.preventDefault();

    const { id, url,detailUrl,title,price,description,discount,tagline ,no_of_times } = udata;
    console.log(id, url,detailUrl,title,price,description,discount,tagline ,no_of_times);
    try {
        const res = await fetch("http://localhost:8005/admin/addproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({
                id, url,detailUrl,title,price,description,discount,tagline ,no_of_times
            })
        });
        console.log(res.status);
        // const data = await res.json();
        if (res.status === 400 ) {
            toast.error("Invalid Details 👎!", {
                position: "top-center"
            });
        } else {
            setUdata({
                ...udata, id: "",
                url: "",
                detailUrl: "",
                title: "",
                price: "",
                description: "",
                discount: "",
                tagline: "",
                no_of_times:"",
            });
            toast.success("Product Added Successfully 😃!", {
                position: "top-center"
            });
        }
    } catch (error) {
        console.log("front end ka catch error hai" + error.message);
    }
}

  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Product ID</label>
                            <input type="text" name="id"
                                id="id" onChange={adddata}
                                value={udata.id}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="text">Product Url</label>
                            <input type="url" name="url"
                                id="url" onChange={adddata}
                                value={udata.url}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="url">Product Detail_Url</label>
                            <input type="url" name="detailUrl"
                                id="detailUrl"onChange={adddata}
                                value={udata.detailUrl} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="title">Product Title</label>
                            <input type="text" name="title"
                                id="title"onChange={adddata}
                                value={udata.title}  />
                        </div>
                        <div className="form_data">
                            <label htmlFor="price">Product Price</label>
                            <input type="text" name="price"
                                id="price"onChange={adddata}
                                value={udata.price} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" name="description"
                                id="description"onChange={adddata}
                                value={udata.description} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="discount">Product Discount</label>
                            <input type="text" name="discount"
                                id="discount"onChange={adddata}
                                value={udata.discount} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="tagline">Product Tagline</label>
                            <input type="text" name="tagline"
                                id="tagline"onChange={adddata}
                                value={udata.tagline} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="no_of_times">No of Sales Till Now</label>
                            <input type="number" name="no_of_times"
                                id="no_of_times"onChange={adddata}
                                value={udata.no_of_times} />
                        </div>
                        <button type="submit" className="signin_btn"onClick={senddata}>Continue</button>
                        <Divider />
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Sign_up