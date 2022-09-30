import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./service/counterSlice";

export const store = configureStore({
	reducer: {
		[counterSlice.name]: counterSlice.reducer,
	},
});
