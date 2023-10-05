import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { // all the function should be create here. based on this reducer. format is name: (parameter, action) => {}
        increment: (store) => {
            store.count = store?.count + 1;
        },
        decrement: (store) => {
            store.count = store?.count - 1;
        },
        incrementByAction: (state, action) => {
            state.count = state?.count + action?.payload;
        },
        decrementByAction: (state, action) => {
            state.count = state?.count - action?.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAction, decrementByAction} = counterSlice.actions;
export default counterSlice?.reducer; // reducer should be default export