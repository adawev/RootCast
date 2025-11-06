import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import { toast } from "sonner";

const slice = createSlice({
    name: "weathercheck",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        resSaved: (state, action) => {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
        },
        errorCreate: (state, action) => {
            state.loading = false;
            state.data = null; // data yo‘q
            state.error = action.payload?.error || "Xatolik yuz berdi!";
            toast.info(action.payload?.error || "Error!");
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
