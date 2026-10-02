import { useState } from "react";

interface IProps {
    duy: string;
    people: {
        hoten: string;
        age: number;
        address: string;
    }
    gmail?: string;
    clickFunction: (v: string) => void;
    todos: string[];
    setTodos: (v: string[]) => void;
}


const InputTodo = (props: IProps) => {
    const { clickFunction, todos, setTodos } = props;
    const [message, setMessage] = useState("");

    const handlerClick = () => {
        if (!message) {
            alert("message is empty");
            return;
        };
        setTodos([...todos, message]);
        setMessage("");
    }
    return (
        <div>
            <div>Text todo</div>
            <input value={message} type="text" onChange={(event) => { setMessage(event.target.value) }} /> <button onClick={() => {
                handlerClick()
            }}>submit</button>
            <div>{message}</div>

        </div>
    )
}
export default InputTodo