import React, { useContext, useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./Log_in.css";
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from "../Admin_Context/Admin_ContextProvider";

const Sign_in = () => 
{
  const navigate = useNavigate();
    const [logdata,setdata]=useState({
      email:"",
      password:""
    });
    const { account, setAccount } = useContext(Logincontext);
    // to change value of email and password when you enter in box
    const adddata = (e)=>{
      
      const{name,value}=e.target;
      console.log(name,value);
      setdata((pre) => {
        return {
          ...pre,
          [name]:value
        }
      })
    };
    const senddata = async (e) => {
      e.preventDefault();

      const { email, password } = logdata;
      try {
          const res = await fetch("http://localhost:8005/admin/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              credentials: 'include',
              body: JSON.stringify({
                  email, password
              })
          });


          const data = await res.json();
          // console.log(data);
          
           
          if (res.status === 400 || !data) {
              console.log("Invalid details  ");
              toast.error("Invalid Details 👎!", {
                  position: "top-center"
              });
              
          } else {
              setAccount(data);
              setdata({ ...logdata, email: "", password: "" })
              toast.success("Login Successfully done 😃!", {
                  position: "top-center"
              });
              localStorage.setItem("token", data.tokens[0].token)
              navigate("/home");
          }
         
      } catch (error) {
          console.log("login page ka error" + error.message);
      }
  };
  return(
  <>
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method='POST'>
            <h1> Admin Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email"onChange={adddata}
                                value={logdata.name} />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="   At least 6 characters "
                onChange={adddata}
                value={logdata.password}
              />
            </div>
            <button className="signin_btn" onClick={senddata} style={{color:'#0066c0'}}>Continue</button>
          </form>
        </div>
      </div>
    </section>
  </>)
}

export default Sign_in;
