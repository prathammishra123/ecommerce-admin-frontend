import React, { useState , useEffect } from 'react'
import { Divider } from '@mui/material';
import "./Product_edit.css";
import { NavLink, useParams } from 'react-router-dom' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// just for finding and updating values in forms.

const Product_edit = () => {
    const {pro_id}=useParams();
    console.log(pro_id);
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
   
    // for getting details of individual item
    const [inddata, setIndedata] = useState("");
    const getinddata = async () => {
        const res = await fetch(`http://localhost:8005/admin/getproductsone_mongo/${pro_id}`, {
            // mode: 'no-cors',
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);
       
        if (res.status !== 200) {
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        getinddata();
    }, [pro_id]);
    // This api is called for editing the product... with id pro_id
    const senddata = async (e) => {
        // It prevents reloading page on clicking
        e.preventDefault();
    
        const { id, url,detailUrl,title,price,description,discount,tagline ,no_of_times } = udata;
        console.log(id, url,detailUrl,title,price,description,discount,tagline ,no_of_times);
        try {
            const res = await fetch(`http://localhost:8005/admin/updateproduct/${pro_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials:"include",
                body: JSON.stringify({
                    id, url,detailUrl,title,price,description,discount,tagline ,no_of_times
                })
            });
            console.log(res.status);
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
                toast.success("Product Updated Successfully 😃!", {
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
                            <h1>EDIT PRODUCT DETAILS-</h1>
                            <div className="form_data">
                                <label htmlFor="name">Product ID</label>
                                <input type="text" name="id"
                                    id="id" onChange={adddata}
                                    value={udata.id} placeholder={inddata.id}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="text">Product Url</label>
                                <input type="url" name="url"
                                    id="url" onChange={adddata}
                                    value={udata.url}placeholder={inddata.url}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="url">Product Detail_Url</label>
                                <input type="url" name="detailUrl"
                                    id="detailUrl"onChange={adddata}
                                    value={udata.detailUrl} placeholder={inddata.detailUrl}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="title">Product Title</label>
                                <input type="object" name="title"
                                    id="title"onChange={adddata}
                                    value={udata.title}  placeholder={inddata.title}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="price">Product Price</label>
                                <input type="object" name="price"
                                    id="price"onChange={adddata}
                                    value={udata.price} placeholder={inddata.price}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="description">Product Description</label>
                                <input type="text" name="description"
                                    id="description"onChange={adddata}
                                    value={udata.description} placeholder={inddata.description}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="discount">Product Discount</label>
                                <input type="text" name="discount"
                                    id="discount"onChange={adddata}
                                    value={udata.discount} placeholder={inddata.discount}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="tagline">Product Tagline</label>
                                <input type="text" name="tagline"
                                    id="tagline"onChange={adddata}
                                    value={udata.tagline} placeholder={inddata.tagline}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="no_of_times">No of Sales Till Now</label>
                                <input type="number" name="no_of_times"
                                    id="no_of_times"onChange={adddata}
                                    value={udata.no_of_times} placeholder={inddata.no_of_times}/>
                            </div>
                            <button type="submit" className="signin_btn"onClick={senddata}>Continue</button>
                            <Divider />
                        </form>
                    </div>
                </div>
            </section>
      )
  
}

export default Product_edit