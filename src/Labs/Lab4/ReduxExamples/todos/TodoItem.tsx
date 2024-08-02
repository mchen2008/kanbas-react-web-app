import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className = "col-3">
    <li key={todo.id} className="list-group-item">
      <button className = "btn btn-danger ms-2 float-end" onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </button>
      <button className = "btn btn-primary float-end" onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
    </div>
  );
}
