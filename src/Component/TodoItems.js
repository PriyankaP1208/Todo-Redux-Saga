import React, {useState} from "react";
import { useDispatch } from "react-redux";
//import TodoInput from "./TodoInput";
import './user.css'
import { deleteTodo, updateTodo } from "../redux/app.action";

const TodoItem = ({todo}) => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    return (
        <>
            <div className="row">
                <div>
                    #{todo.id}
                </div>
                <div className="row-1">
                    {edit ? (
                        <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    ):(
                        <h4>{todo.name}</h4>
                    )}
                </div>
                <button type='primary' onClick={() => {
                    if(edit) {
                        setName(todo.name);
                        dispatch(updateTodo({
                            ...todo,
                            name:name,
                        }))
                    }
                    setEdit(!edit)
                    }}>{edit?"update" : 'Edit'}</button>
                <button type='primary' onClick={()=>dispatch(deleteTodo({id:todo.id}))}>
                    Delete
                </button>
            </div>
        </>
    )
}

export default TodoItem;