import React from 'react';
import "./Todo.css";
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core';
import db from "./firebase"


function Todo(props) {
    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todoObject.text} secondary = "Deadline: "/>
            </ListItem>
            <Button onClick={event => 
                db.collection('todos').doc(props.todoObject.id).delete()
            }>Done</Button>
        </List>
    )
}

export default Todo


