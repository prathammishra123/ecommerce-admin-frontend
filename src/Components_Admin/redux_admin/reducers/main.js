// created to compile all reducers ie.combine all of them to onemptied.apply
import { getProductsReducers ,getUsersReducers} from "./Productsreducer";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers,
    getusersdata  :getUsersReducers
 });

export default rootreducers;