import { configureStore } from "@reduxjs/toolkit";

 const initialState = {
    
        contacts: 
            JSON.parse(localStorage.getItem("contacts")) || dataContacts
        ,
    
        
    
    filters: {
      status: "all",
    },
  };

const rootReducer = (state=initialState, action) => {
    return state;
  };
  
  export const store = configureStore({
    reducer: rootReducer,
  });