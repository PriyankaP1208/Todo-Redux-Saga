import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/app.action";
import './user.css'

const TodoInput = () => {
    const [name, setName] = useState("");
    let dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: Math.floor((Math.random() * 10)),
            name,
        }));
        setName("");
    }

    return(
        <>
            <div className="container"> 
                <input
                type="text" 
                placeholder="type here..."
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <button className="button" type="primary" onClick={handleAddTodo} size="middle">Add</button>
            </div>
        </>
    )
}

export default TodoInput;