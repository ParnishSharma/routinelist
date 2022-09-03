import React from "react";

const Form =({setInputText,todos,settodos,inputText,setstatus})=>{
    const inputTextHandler=(e)=>{
    
        setInputText(e.target.value);
    };
const submitToDoHandler=(e)=>
{
e.preventDefault();
settodos([...todos,{ text: inputText, completed: false,id: Math.random()*1000}])
setInputText("")
}

const statushandler=(e)=>{
setstatus(e.target.value)

}

return (

    <form>
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitToDoHandler}className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={statushandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
    );

};
export  default Form;