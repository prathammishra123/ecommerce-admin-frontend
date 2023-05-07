import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Contextprovider from "./Components_Admin/Admin_Context/Admin_ContextProvider"
import  store from "./store";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextprovider>
  <Provider store={store}>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </Contextprovider>
  
    
);