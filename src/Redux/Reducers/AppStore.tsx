import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./AppReducer";

export const store = configureStore({
    reducer : {SliceReducer : AppReducer}
}); 

export type AppRootStore = ReturnType<typeof store.getState>;
export default store;