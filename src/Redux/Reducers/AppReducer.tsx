import { createSlice } from "@reduxjs/toolkit";
import { IReduxState } from "../../Utils/AppType";

const initialState: IReduxState = {
    isLoaderStart: false,
    userData : null,
    currentTab : 0,
}

export const Reducer = createSlice({
    name : 'Reducer',
    initialState,
    reducers :{
        setIsLoader : (state , action) => {
            state.isLoaderStart = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
          },
        setTab: (state, action) => {
            state.currentTab = action.payload;
          },
    }
})
export const {
    setIsLoader,
    setUserData,
    setTab,
} = Reducer.actions;

export default Reducer.reducer;