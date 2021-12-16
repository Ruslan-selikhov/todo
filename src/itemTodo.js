import React,{useContext} from 'react'
import Context from './context';
function ItemTodo ({number,onClick,todo}){

    let classes='';

    if(todo.completed)
    classes='comp'

    const {removeTodo}=useContext(Context)
       
    
    return(<li key= {number} >
        <input type="checkbox" onChange={()=>onClick(todo.id)}/>
        <span className={classes}>{todo.title}</span>
        <button className='rm' onClick={()=>removeTodo(todo.id)} />

    </li>)
}
export default ItemTodo;