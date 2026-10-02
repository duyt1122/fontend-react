
import { useState } from 'react';
import './App.css'

import InputTodo from './todo/input.todo.js'

function App() {

  const name = "Duy";
  const people = {
    hoten: "duyyy",
    age: 20,
    address: "Ka noi"
  }
  const gmail = "duyyy@gmail.com";
  const arrayy = [1, 2, 3, 4, 5];
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
  const clickFunction = (name: String) => {
    alert(`test name: ${name}`)
  }
  return (
    <div>
      <div>
        name : {name}
      </div>
      <div>tuoi: {people.age}</div>
      <InputTodo
        duy={name}
        people={people}
        gmail={gmail}
        clickFunction={clickFunction}
        todos={todos}
        setTodos={setTodos} />

      <br />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>

    </div>
  )
}

export default App
