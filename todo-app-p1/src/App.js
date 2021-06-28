import React, { useState } from 'react';
import { Button,FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [userInput, setUserInput] = useState("");
  const addTodoItem = (event) => {
    event.preventDefault(); // stops the refresh every time we hit submit 
    setTodoItems([...todoItems, userInput]);
    setUserInput(''); // clear up the input after submitting 
  }
  return (
    <div className="App">
      <h1>Gonna build this shit!</h1>
      <form>
        <FormControl>
        <InputLabel htmlFor="my-input">Write a todo</InputLabel>
        <Input aria-describedby="todo input button" value={userInput} onChange={event => setUserInput(event.target.value)}  />
        </FormControl>
        <Button disabled={!userInput}type = "submit" onClick = {addTodoItem} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {todoItems.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

