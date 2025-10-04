import { configureStore } from "@reduxjs/toolkit";

import weather from "./reducers/Weather";
import api from './middleware/api';

export default configureStore({
    reducer: {
        weather,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});