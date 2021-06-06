import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/todoSlice';

function Todoform({addTodo, showTodoForm}) {

    const [value, setValue] = useState("");
    console.log(showTodoForm)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        dispatch(
            addNewTodo({
              text: value,
          })
        );
        setValue("");
    }


  return (
    (showTodoForm === false) ?
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control input"
        value={value}
        placeholder="Add a new note"
        onChange={e => setValue(e.target.value)}
      />
    </form> : <div></div>
  );
}

export default Todoform;