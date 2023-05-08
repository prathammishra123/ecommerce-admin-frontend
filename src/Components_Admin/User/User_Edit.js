import React, { useState , useEffect } from 'react'
import { Divider } from '@mui/material';
import "./User_Edit.css";
import { NavLink, useParams } from 'react-router-dom' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shopgenie_logo from "../../photos/blacklogoamazon.png"
// just for finding and updating values in forms.

const User_edit = () => {
    const {user_id}=useParams();
    const [udata, setUdata] = useState({
        fname :"",
        email: "",
        mobile: "",
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
   
    // for getting details of individual user
    const [inddata, setIndedata] = useState("");
    const getinddata = async () => {
        const res = await fetch(`http://localhost:8005/admin/getusersone_mongo/${user_id}`, {
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
    }, [user_id]);
    // This api is called for editing the user... with id pro_id
    const senddata = async (e) => {
        // It prevents reloading page on clicking
        e.preventDefault();
    
        const { fname,email,mobile} = udata;
        try {
            const res = await fetch(`http://localhost:8005/admin/update/${user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials:"include",
                body: JSON.stringify({
                    fname,email,mobile
                })
            });
            console.log(res.status);
            if (res.status === 400 ) {
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                setUdata({
                    ...udata, fname: "",
                    email: "",
                    mobile: "",
                });
                getinddata();
                toast.success("User Updated Successfully 😃!", {
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
                        <img src={shopgenie_logo} alt="signupimg" />
                    </div>
                    <div className="sign_form">
                        <form method='POST'>
                            <h1>EDIT USER DETAILS-</h1>
                            <div className="form_data">
                                <label htmlFor="name">USER NAME</label>
                                <input type="text" name="fname"
                                    id="fname" onChange={adddata}
                                    value={udata.fname} placeholder={inddata.fname}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="text">USER EMAIL</label>
                                <input type="text" name="email"
                                    id="email" onChange={adddata}
                                    value={udata.email}placeholder={inddata.email}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="url">USER MOBILE NO-</label>
                                <input type="number" name="mobile"
                                    id="mobile"onChange={adddata}
                                    value={udata.mobile} placeholder={inddata.mobile}/>
                            </div>
                            <button type="submit" className="signin_btn"onClick={senddata}>Continue</button>
                            <Divider />
                        </form>
                    </div>
                </div>
            </section>
      )
  
}

export default User_edit