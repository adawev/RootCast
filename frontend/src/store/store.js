import { configureStore } from "@reduxjs/toolkit";

import weathercheck from "./reducers/Weather";
import login from "./reducers/Login";
import api from './middleware/api';

export default configureStore({
    reducer: {
        weathercheck,
        login,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});