import React from "react";
import { useDispatch } from "react-redux";
import { deltodo, toggletodo } from "../slices/todoSlice";

export const ToDo = ({ todo }) => {

  const dispatch = useDispatch();

  return (
    <>
      <td>{todo.id}</td>
      <td id={"title"+todo.id}>{todo.description}</td>
      <td>
        {todo.done ? (
          <span className="done">Done</span>
        ) : (
          <span className="notdone">Not Done</span>
        )}
      </td>
      <td style={{width:'120px'}}><button onClick={() => dispatch(toggletodo(todo.id))}>Cambiar estado</button></td>
      <td><button onClick={() => dispatch(deltodo(todo.id))} className="delete iconos">❌</button></td>
    </>
  );
};
export default ToDo
