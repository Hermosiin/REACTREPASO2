import React, { useEffect, useState, useReducer } from "react";
import { ToDo } from "./ToDo";
import { ToDoAdd } from "./ToDoAdd";
import { todosReducer } from "./todoReducer";
import "./TodoList.css";

// Estat inicial del reducer. Buit
const initialState = [];
const init = () => {
  // Si localstorage tornes null tornariem un array buit
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const ToDos = () => {
  let [notodo, setNoTodo] = useState(false);
  const [todos, dispatchTodos] = useReducer(todosReducer, initialState, init);

  const [ oculta,setOculta] = useState(false)

  const refresca = ()=>{

    setRefresh(!refresh)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos[0] == null){
      setNoTodo(true);
    }else{
      setNoTodo(false);
    }
  }, [todos]);

  const handleNewToDo = (todo) => {
    console.log("Afegeixo");
    console.log({ todo });

    const action = {
      type: "Add Todo",
      payload: todo
    };
    dispatchTodos(action);
  };

  const handleDeleteToDo = (id) => {
    console.log("Todo con ID " + id + " Eliminada");
    dispatchTodos({
      type: "Del Todo",
      payload: id
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodos({
      type: "Toggle Todo",
      payload: id
    });
  };

  return (
    <>
      <h1 style={{fontSize: '2.5em', margin:'25px'}}>Todos Reducer</h1>
      {/* <ToDoAdd handle={handleNewToDo} /> */}

      <button style={{width: '10%', margin:'0 auto'}} onClick={ ()=> setOculta(!oculta)} >{ !oculta ? "Ocultar Afegir" : "Mostrar Afegir" }</button>
    { !oculta ? <ToDoAdd refrescar={refresca} handle={handleNewToDo} /> : <></> }
      <div className="container">
        {notodo == false &&
        <table className="tabla">
          <thead>
            <tr>
              <th><h1>ID</h1></th>
              <th><h1>Descripción</h1></th>
              <th><h1>Estado</h1></th>
              <th colSpan={4}><h1>ACTIONS</h1></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr  key={todo.id}><ToDo todo={todo} handleDelete={handleDeleteToDo} handleToggleTodo={handleToggleTodo} /></tr>
            ))}
          </tbody>
        </table>}
        {notodo == true &&
          <div className="warning error">No hay tareas</div>
        }


      </div>
    </>
    
  );
};

export default ToDos