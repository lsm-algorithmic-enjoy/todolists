import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo.trim().length === 0) return;
    onAdd({ id: uuidv4(), toDo, status: "active" });
    setToDo("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
