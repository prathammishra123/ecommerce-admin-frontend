export const getProducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch('http://localhost:8005/getproducts',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res});
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
    }
}
// for getting all users
 export const getusers = ()=> async(dispatch)=>{
    try {
        const data = await fetch('http://localhost:8005/admin/getusers',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                
        });

        const res = await data.json();
        // console.log("In action.js file");
        // console.log(res);
        dispatch({type:"SUCCESS_GET_USERS",payload:res});
    } catch (error) {
        dispatch({type:"FAIL_GET_USERS",payload:error.response});
    }
}