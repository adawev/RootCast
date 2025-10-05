import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import {toast} from "sonner";

const slice = createSlice({
    name: "login",
    initialState: {
        data: null,
    },
    reducers: {
        resSaved: (state, action) => {
            toast.info(action.payload);
            state.data = action.payload;
        },
        onError: (state) => {
            toast.error("Error occured!");
        },
    },
});

export const { resSaved, errorCreate, loadingStart } = slice.actions;

export const login = (data, reset) => apiCall({
    url: "/register",
    method: "post",
    data: data,
    onSuccess: (responseData) => (dispatch) => {
        reset();
        dispatch(resSaved(responseData));
    },
    onError: errorCreate,
});

export default slice.reducer;
