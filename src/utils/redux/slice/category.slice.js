import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { set } from "react-hook-form";

const categorySice = createSlice({
    name: "Category",
    initialState: {
        categories: [],
        selectedCategory: null,
    },

    reducers: {
        setCategories: (state, actions) => {
            state.categories = actions.payload
        },
        setSelectedCategory: (state, actions) => {
            state.selectedCategory = actions.payload
        }
    }
})

export const { setCategories } = categorySice.actions;

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/category")
            console.log(response.data.data);
            dispatch(setCategories(response.data.data))
        } catch (err) {
            throw new Error(err)
        }
    }
}
export default categorySice.reducer;