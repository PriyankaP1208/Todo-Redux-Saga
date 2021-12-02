import React from "react";
import { useSelector } from "react-redux";
import TodoItem from './TodoItems';
import TodoInput from "./TodoInput";

const TodoList = () => {
    let todos = useSelector((state) => state.app);
    //console.log(todos);
    return(
        <>
            <div className="my-3">
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })}
            </div>
        </>
    )
}

export default TodoList;