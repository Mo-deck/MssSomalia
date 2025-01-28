import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    modalInfo: {
        name: "me",
        info: "lorem"
    }
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
})

// console.log(modalSlice);

export default modalSlice.reducer;
