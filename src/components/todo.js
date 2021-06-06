import React, { useState } from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';


function Todo({todo, completeTodoAction, removeTodoAction, editTodoAction, setShowTodoForm}) {

  const dispatch = useDispatch();

  const [value, setValue] = useState(todo.text);

  const[editmode, seteditmode] = useState(false);

  const handleSubmit = (e) => {
    toggleinput();
    e.preventDefault();
    if (!value) return;
    dispatch(
      editTodoAction({
        id: todo.id,
        text: value,
      })
    );
  }

  const toggleinput = () => {
      seteditmode(!editmode);
  }

  const completeTodo = () => {
    dispatch(
      completeTodoAction({
        id: todo.id,
        isCompleted: !todo.isCompleted
      })
    )
  }

  const removeTodo = () => {
    dispatch(
      removeTodoAction({
        id: todo.id
      })
    )
  }

  return (
    <div className="todo">
      {(editmode===true) ? <form className="editForm" onSubmit={handleSubmit}><input type="text" className="input form-control" value={value} onChange={(e) => setValue(e.target.value)}/></form> : <p style={{ textDecoration: todo.isCompleted ? "line-through" : "", float: "left" }}>{todo.text}</p>}
      <div className="buttonWrap">
      {(editmode===false) ? <button className="btn" onClick={toggleinput}><i className="fa fa-pencil" aria-hidden="true"></i></button> : "" }
        <button style={{marginRight: "5px"}} className="btn btn-sm btn-info" onClick={() => completeTodo()}>{(todo.isCompleted) ? "Completed" : "Complete"}</button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTodo()}>x</button>
        </div>
    </div>
  );
}

export default Todo;