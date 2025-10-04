import { configureStore } from "@reduxjs/toolkit";

import weathercheck from "./reducers/Weather";
import api from './middleware/api';

export default configureStore({
    reducer: {
        weathercheck,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});