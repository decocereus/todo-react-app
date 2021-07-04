import React, { useState } from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
  makeStyles,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    alignItems: "center",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState("");

  const updateTodo = (event) => {
    setOpen(false);
    event.preventDefault();
    db.collection("todos").doc(props.todoObject.id).set(
      {
        todo: editTodoInput,
      },
      { merge: true }
    );
    setEditTodoInput("");
  };
  return (
    <>
      <Modal className="modal" open={open} onClose={(e) => setOpen(false)}>
        <span className={classes.paper}>
          <form>
            <FormControl>
              <InputLabel htmlFor="my-input">Edit</InputLabel>
              <Input
                placeholder={props.todoObject.text}
                value={editTodoInput}
                onChange={(event) => setEditTodoInput(event.target.value)}
              />
              <Button
                disabled={!editTodoInput}
                type="submit"
                onClick={updateTodo}
                variant="contained"
                color="primary"
              >
                Done
              </Button>
            </FormControl>
          </form>
        </span>
      </Modal>

      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todoObject.text}
            secondary="Get it done!"
          />
        </ListItem>
        <EditIcon onClick={(e) => setOpen(true)} cursor="pointer" />
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todoObject.id).delete()
          }
          cursor="pointer"
        />
      </List>
    </>
  );
}

export default Todo;
