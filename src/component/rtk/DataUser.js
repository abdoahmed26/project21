import { createSlice } from '@reduxjs/toolkit'
import { dataUser } from './myData';

export const dataSlice = createSlice({
    initialState:dataUser,
    name:"dataSlice",
    reducers:{
        addData : (state,action)=>{
            state.push(action.payload);
        }
    }
})
export const {addData} = dataSlice.actions;
export default dataSlice.reducer;