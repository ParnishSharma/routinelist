import React, { useState,useEffect} from 'react'
import"./App.css"
import Form from './components/Form'
import Todolist from './components/Todolist'

function App(){
  const [ inputText ,setInputText]=useState("");
  const [ todos, settodos]= useState([]);
  const[status,setstatus]=useState("all");
  const[filtertodos,setfiltertodos]=useState([]);

 

  const filterhandler=()=>{
switch(status){
  case 'completed':
    setfiltertodos(todos.filter(todo=>todo.completed===true))
    break;
    case 'uncompleted':
      setfiltertodos(todos.filter(todo=>todo.completed===false))
    break;
    default:
      setfiltertodos(todos);
      break
}

  };
  const savetolocaltodos =()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocaltodos=()=>{

    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let todolocal=JSON.parse(localStorage.getItem("todos"));
      settodos(todolocal);
    }
  };

  useEffect(()=>{
    getLocaltodos();
  }, []);

  useEffect(()=>{
  filterhandler();
  savetolocaltodos();
},[todos,status]);

    return (
      <div className="App">
        <header>
        <h1>PS TODO LIST</h1>
       </header>
       <Form inputText={inputText} todos={todos} settodos={settodos} setInputText ={setInputText} setstatus={setstatus} />
       <Todolist todos={todos} settodos={settodos} filtertodos={filtertodos}/>

      </div>
    )
  }

export default App;
