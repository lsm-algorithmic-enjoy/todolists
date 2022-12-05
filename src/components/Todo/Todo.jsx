import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { toDo, status, id } = todo;
  const onChange = (event) => {
    const status = event.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.text}>
        {toDo}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsTrash />
        </button>
      </span>
    </li>
  );
}
