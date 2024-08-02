import { configureStore } from "@reduxjs/toolkit";
import myTodoReducers from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: myTodoReducers,
});
