import React, { useContext } from 'react'
// import { Logincontext } from '../Admin_Context/Admin_ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProducts } from "../redux_admin/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Delete = ({deletedata}) => {
//   const { account, setAccount } = useContext(Logincontext);
const dispatch = useDispatch();
  const removedata = async (req,res) => {
    try {
        console.log({deletedata});
        const res = await fetch(`http://localhost:8005/admin/deleteproduct/${deletedata}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data+"it comes");

        if (res.status === 400 || !data) {
            console.log("error aai remove time pr");
        } else {
            // setAccount(data);
            dispatch(getProducts());
            // get();
            toast.success("This Product is deletd 😃!", {
                position: "top-center"
            });
        }
    } catch (error) {
        console.log("catch block"+error);
    }

}

  return (
    <div className="add_remove_select" >
    <p style={{ cursor: "pointer", fontSize: "25px" }}onClick={()=>removedata(deletedata)}>Delete</p>
    <Link style={{ cursor: "pointer", fontSize: "25px" , alignContent:"center" }}to={`/admin_edit_product/${deletedata}`}> EDIT</Link>
    <ToastContainer/>
</div>
  )
}

export default Delete;