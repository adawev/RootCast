import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== "api/apiCall") return next(action);

    const { url, method, data, onSuccess, onError, responseType } = action.payload;

    try {
        const response = await axios.request({
            baseURL: "https://172.105.83.81/api/",
            url,
            method,
            data,
            ...(responseType && { responseType })
        });

        if (onSuccess) dispatch(onSuccess(response.data));
    } catch (error) {
        if (onError) dispatch(onError(error));
    }
};

export default api;
