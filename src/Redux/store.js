import {configureStore} from "@reduxjs/toolkit"
import firebaseSlice from "./firebaseSlice"

export const store=configureStore({
    reducer:{       
        firebaseSlice,        
    }
})