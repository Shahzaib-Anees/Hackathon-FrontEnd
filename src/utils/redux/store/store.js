import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user.slice";
import categoryReducer from "../slice/category.slice.js"
const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer
  },
});

export default store;
