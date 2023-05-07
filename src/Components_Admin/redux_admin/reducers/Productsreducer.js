const products = [];

export const getProductsReducers = (state = {products},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products:action.payload} 
        case "FAIL_GET_PRODUCTS":
            return {error:action.payload}
        default : return state
    }
}
// reducer for gettting all users
const users=[];
export const getUsersReducers = (state = {users},action)=>{
    switch(action.type){
        case "SUCCESS_GET_USERS":
            return {users:action.payload} 
        case "FAIL_GET_USERS":
            return {error:action.payload}
        default : return state
    }
}