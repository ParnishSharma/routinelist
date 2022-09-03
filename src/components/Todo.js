import React from "react";
import Todolist from "./Todolist";

const Todo =({text,todo,todos,settodos})=>{

    const deletehandler=()=>{
        settodos(todos.filter((el)=>el.id !==todo.id));

        
    }
    const completehandler=()=>
    {
    settodos(todos.map(item=>
    {
        if(item.id===todo.id){
            return{
                ...item,completed:!item.completed 
            }
        }
        return item;
    }
    ))

    }

return(
<div className="todo">
   <li className={`to-item ${todo.completed? "completed":" "}`}>{text}</li>
   <button onClick={completehandler} className="complete-btn">
    <i className="fas fa-check"></i>
   </button>
   <button onClick={deletehandler} className="trash-btn">
    <i className="fas fa-trash"></i>
   </button>

</div>

);

}
export default Todo;