import './App.css';
import React, { useState } from 'react';
import Todo from './components/todo';
import Todoform from './components/todoform';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { editTodoAction, completeTodoAction, removeTodoAction } from './redux/todoSlice';


function App() {
  
    const todos = useSelector((state) => state.todos)

    const [showTodoForm, setShowTodoForm] = useState(false);

    // useEffect(() => {
      // setTodos(todos);
    // }, []); 


  return (
    <div className="app">
      <div className="todo-list">
      <h3 className="heading">To-Do App</h3>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodoAction={completeTodoAction}
            removeTodoAction={removeTodoAction}
            editTodoAction={editTodoAction}
            setShowTodoForm={setShowTodoForm}
          />
        ))}
        <Todoform 
          todos={todos}
          showTodoForm={showTodoForm}/> 
      </div>
    </div>
  );
}

export default App;
