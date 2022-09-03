import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, settodos,filtertodos  }) => {

    return (
        <div className="todoconatianer">
            <ul className="todolist">
                {filtertodos.map(todo => (<Todo settodos={settodos} todos={todos} key={todo.id} text={todo.text} todo={todo} id={todo.id} />))}
            </ul>
        </div>

    );

};
export default Todolist;