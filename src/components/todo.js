import React, { useState } from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';


function Todo({todo, index, completeTodo, removeTodo, editTodo, setShowTodoForm}) {

  const [value, setValue] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    editTodo(index, value);
    todo.editMode = false;
    setShowTodoForm(false);
}

  return (
    <div className="todo">
      {(todo.editMode===true) ? <form className="editForm" onSubmit={handleSubmit}><input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)}/></form> : <p style={{ textDecoration: todo.isCompleted ? "line-through" : "", float: "left" }}>{value}</p>}
      <div className="buttonWrap">
      {(todo.editMode===true) ? "" :<button className="btn" onClick={() => editTodo(index)}><i className="fa fa-pencil" aria-hidden="true"></i></button>}
        <button style={{marginRight: "5px"}} className="btn btn-sm btn-info" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTodo(index)}>x</button>
        </div>
    </div>
  );
}

export default Todo;