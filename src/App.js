import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './components/todo';
import Todoform from './components/todoform';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [todos, setTodos] =  useState([
    { text: "Learn about React",
      isCompleted: false,
      editMode: false
    },
    { text: "Meet friend for lunch",
      isCompleted: false,
      editMode: false
    },
    { text: "Build really cool todo app",
      isCompleted: false,
      editMode: false
    }])

    const [showTodoForm, setShowTodoForm] = useState(false);

    useEffect(() => {
      // setTodos(todos);
    }, []); 

    const addTodo = (text) => {
      const newTodos = [...todos, {text}]
      setTodos(newTodos);
      setShowTodoForm(false);
    };

    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    const editTodo = (index, text) => {
      console.log("called");
      const editedTodos = [...todos];
      editedTodos[index].editMode = true;
      editedTodos[index].text = {text};
      console.log(editedTodos);
      setTodos(editedTodos);
      setShowTodoForm(true);
    }

  return (
    <div className="app">
      <div className="todo-list">
      <h3 className="heading">To-Do App</h3>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            setShowTodoForm={setShowTodoForm}
          />
        ))}
        <Todoform 
          addTodo={addTodo}
          todos={todos}
          showTodoForm={showTodoForm}/> 
      </div>
    </div>
  );
}

export default App;
