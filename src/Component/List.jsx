import React, {  useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteitem } from '../redux/action/action'

function List() {
    const item=useRef()
    const form=useRef()
const [putinthelist,setPutinthelist]=useState(false)
const theitem=useSelector(state=>state.ToDoList.item)
const dispatch=useDispatch()

const addtothelist=(e)=>{
  const newitem=item.current.value;
  e.preventDefault();
  dispatch(addItem(newitem))
setPutinthelist(true)
item.current.value=""
}
const deleteitems=()=>{
  dispatch(deleteitem())


}
  return (
    <>
    
    <div>To Do List :{}</div>
    <form onSubmit={addtothelist} ref={form}>
<button onClick={deleteitems}>delete</button>
<input type='text' ref={item} />
<button type='submit'>add</button>
{putinthelist&&theitem.map((prod,inedx)=><div key={inedx}>{prod}</div>)}
        
      </form>
    </>
  )
}

export default List
