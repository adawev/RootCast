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
            toast.success("Register successfully");
            action.payload.navigate("/");
        },
        onError: (state) => {
            toast.error("Error occured!");
        },
    },
});


export const { resSaved, errorCreate } = slice.actions;

export const login = (data, navigate) => apiCall({
    url: "/register",
    method: "post",
    data: data,
    onSuccess: (response) => resSaved({ data: response, navigate }),
    onError: errorCreate,
});

export default slice.reducer;
