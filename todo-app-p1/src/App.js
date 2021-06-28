import React, {useState} from 'react'
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [userInput, setUserInput] = useState("");
  const addTodoItem = (event) => {
    event.preventDefault(); // stops the refresh every time we hit submit 
    setTodoItems([...todoItems, userInput]);
  }
  return (
    <div className="App">
      <h1>Gonna build this shit!</h1>
      <form>
        <input placeholder="Get it done!" value={userInput} onChange={event => setUserInput(event.target.value)}/>
        <button type = "submit" onClick = {addTodoItem}> Add Todo</button>
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

