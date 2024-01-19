import { createSlice } from "@reduxjs/toolkit";
import { Firebase } from "../firebase";
import { Firestore } from "../firebase";

const firebaseslice=createSlice({
    name:"firebase",
    initialState:{
        Firebase,       
        Firestore
    }   
})

export default firebaseslice.reducer;