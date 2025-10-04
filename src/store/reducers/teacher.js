import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "sonner";

const slice = createSlice({
    name: 'teacher',
    initialState: {
        teacherCount: 0,
        teachers: [],
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.teachers = action.payload;
            state.teacherCount = state.teachers.length;
        },
        resSaved: (state, action) => {
            toast.info(action.payload.message || "Xatolik mavjud!");
        },
        resDelete: (state, action) => {
            console.log(action.payload);
            // state.teachers.map((item, index) => {
            //     if (item.id === action.payload.id) {
            //         state.teachers.splice(index, 1);
            //         toast.success("Successfully deleted teacher!");
            //     }
            // });
        },
        resError: (state, action) => {
            const status = action?.payload?.status;

            if (status) {
                toast.error("Xatolik mavjud!");
            }
        },
        resUpdate: (state, action) => {
            state.teachers.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
            toast.success("Successfully updated student!");
        },
        errorCreate: (state, action) => {
            toast.error("Bunday ma'lumotdagi foydalanuvchi mavjud! Iltimos qaytib urinib ko'ring!");
        }
    }
});

export const {getFromResponse,errorCreate, resSaved, resUpdate, resDelete, resError} = slice.actions;


export const getAllTeachers = () => apiCall({
    url: "/teacher",
    method: "get",
    onSuccess: getFromResponse,
    onError: resError
});
export const saveTeacher = (data, reset) => apiCall({
    url: "/teacher",
    method: "post",
    data: data,
    onSuccess: (responseData) => (dispatch) => {
        reset();
        dispatch(resSaved(responseData));
    },
    onError: errorCreate,
});
export const deleteTeacher = (id) => apiCall({
    url: `/teacher/${id}`,
    method: "delete",
    data: {id},
    onSuccess: resDelete,
    onError: resError,
});
export const updateTeacher = (data) => apiCall({
    url: `/teacher/${data.id}`,
    method: "put",
    data: data,
    onSuccess: resUpdate,
    onError: resError,
});

export default slice.reducer;
