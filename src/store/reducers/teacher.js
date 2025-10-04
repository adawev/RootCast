import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "sonner";

const slice = createSlice({
    name: 'weathercheck',
    initialState: {
        weathercheck: [],
    },
    reducers: {
        resSaved: (state, action) => {
            console.log(action.payload)
            state.weathercheck = action.payload;
        },
        errorCreate: (state, action) => {
            toast.error("Iltimos 5 kun oraligidagi sanani kiriting va shahar nomi to'g'riligini tekshiring!");
        }
    }
});

export const {getFromResponse,errorCreate, resSaved, resUpdate, resDelete, resError} = slice.actions;


export const getWeather = (data) => apiCall({
    url: "/weather",
    method: "get",
    data: data,
    onSuccess: (responseData) => (dispatch) => {
        dispatch(resSaved(responseData));
    },
    onError: errorCreate,
});

export default slice.reducer;
