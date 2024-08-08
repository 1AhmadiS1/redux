import { configureStore } from "@reduxjs/toolkit";
import { Todolist } from "./reducer/Todolist";

const store= configureStore({
reducer:{
    ToDoList:Todolist
}
}
)
export default store