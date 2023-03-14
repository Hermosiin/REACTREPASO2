import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToDo } from "./ToDo";
import { ToDoAdd } from "./ToDoAdd";

const ToDosR = () => {

  const { todos } = useSelector((state) => state.todos);
  const [ oculta,setOculta] = useState(false)

  const refresca = ()=>{

    setRefresh(!refresh)
  }

  useEffect(() => {
    localStorage.setItem("todosredux", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 style={{fontSize: '2.5em', margin:'25px'}}>Todos Redux</h1>
      {/* <ToDoAdd/> */}
      <button style={{width: '10%', margin:'0 auto'}} onClick={ ()=> setOculta(!oculta)} >{ !oculta ? "Ocultar Afegir" : "Mostrar Afegir" }</button>
    { !oculta ? <ToDoAdd refrescar={refresca}/> : <></> }

      <div className="container">
        {todos.length == 0 ? (
          <div className="warning error">No hay tareas</div>
        ) : (
          <table className="tabla">
              <thead>
                <tr>
                  <th><h1>ID</h1></th>
                  <th><h1>Descripción</h1></th>
                  <th><h1>Estado</h1></th>
                  <th colSpan={1}><h1>ACTIONS</h1></th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}><ToDo todo={todo}/></tr>
                ))}
              </tbody>
            </table>
        )}
            
      </div>
    </>
  );
};
export default ToDosR;
