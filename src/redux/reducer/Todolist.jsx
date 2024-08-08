import initialstate from "./initialstate";

export const Todolist=(state=initialstate,action)=>{
switch(action.type){
case "ADD":return {...state,item:[...state.item,action.payload]}
case "DELETE":return{...state,item:[]}
default:
    return state;



}



}


