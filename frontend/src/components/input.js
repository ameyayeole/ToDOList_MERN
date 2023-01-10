import { useState } from "react";
const Input = ()=>{

    const [input,setInput] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
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