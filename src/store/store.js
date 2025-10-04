import { configureStore } from "@reduxjs/toolkit";

import teacher from "./reducers/teacher";
import api from './middleware/api';

export default configureStore({
    reducer: {
        teacher,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});