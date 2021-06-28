import React, { useState, useEffect } from 'react';
import { Button,FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [userInput, setUserInput] = useState("");
// When the app loads we want to get the todo items of user from the db as they are added/removed 
// By using the useEffect and the addTodoitem function we can add todo items to our data base which happens in real time
// dynamically

// the useeffect is executed everytime there is a change in our db and it updates our todo items usestate
// when we add an item to the database we dont need to add it manually to our use state bcs everytime 
// the db changes our useeffect is executed and hence the use state is updated automatically 

  
  
  useEffect(() => {
    // this is executed when the app is loaded
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodoItems(snapshot.docs.map( doc => ({id: doc.id, text: doc.data().todo})))
    })
  }, [])
  
  const addTodoItem = (event) => {
    event.preventDefault(); // stops the refresh every time we hit submit 
    db.collection('todos').add({
      todo: userInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setUserInput(''); // clear up the input after submitting 
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <form>
        <FormControl>
        <InputLabel htmlFor="my-input">Write a To-do</InputLabel>
        <Input aria-describedby="todo input button" value={userInput} onChange={event => setUserInput(event.target.value)}  />
        </FormControl>
        <Button disabled={!userInput} type = "submit" onClick = {addTodoItem} variant="contained" color="primary">Add To-do</Button>
      </form>
      <ul>
        {todoItems.map(todo => (
          // here instead of creating the list element here, we are using a component to create it 
          // which lets us modify it at any point and we just have to change the component code.
          // props is basically like an object and inside our component we can get a part of props
          // by doing props.text for eg.
          <Todo todoObject={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

