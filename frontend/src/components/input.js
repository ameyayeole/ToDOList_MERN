import { useState } from "react";
import { useDispatch  } from "react-redux";
import { addNewTodo  } from "../redux/actions";


const Input = ()=>{

    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addNewTodo(input))
    }
    const handleChange = (e)=>{
        setInput(e.target.value);
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Enter new ToDo" onChange={handleChange}/>
        </form>
    )
}

export default Input;