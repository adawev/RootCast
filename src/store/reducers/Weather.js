import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import { toast } from "sonner";

const slice = createSlice({
    name: "weathercheck",
    initialState: {
        weathercheck: [],
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        resSaved: (state, action) => {
            console.log("Weather data:", action.payload);
            state.weathercheck = action.payload;
        },
        errorCreate: (state) => {
            toast.error("Iltimos 5 kun oraligidagi sanani kiriting va shahar nomi to‘g‘riligini tekshiring!");
        },
    },
});

export const { errorCreate, resSaved } = slice.actions;

export const getWeather = ({ city, date }) => (dispatch) => {
    let query = `?city=${encodeURIComponent(city)}`;
    if (date) query += `&date=${date}`;

    dispatch(
        apiCall({
            url: `/weather${query}`,
            method: "get",
            onSuccess: resSaved,
            onError: errorCreate,
        })
    );
};

export default slice.reducer;
