import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import { toast } from "sonner";

const slice = createSlice({
    name: "weathercheck",
    initialState: {
        data: {
            "location": { "name": "Tseri", "lat": 35.07, "lon": 33.32 },
            "weather": {
                "temp": 25.88,
                "feelsLike": 25.75,
                "pressure": 1017,
                "humidity": 47,
                "windSpeed": 5.44,
                "main": "Clouds",
                "description": "scattered clouds"
            }
        },
        loading: false,
        error: null,
    },
    reducers: {
        resSaved: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        errorCreate: (state) => {
            state.loading = false;
            toast.error(
                "Iltimos 5 kun oraligidagi sanani kiriting va shahar nomi to‘g‘riligini tekshiring!"
            );
        },
        loadingStart: (state) => {
            state.loading = true;
        },
    },
});

export const { resSaved, errorCreate, loadingStart } = slice.actions;

export const getWeather = ({ city, date }) => (dispatch) => {
    let query = `?city=${encodeURIComponent(city)}`;
    if (date) query += `&date=${date}`;

    dispatch(loadingStart());

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
