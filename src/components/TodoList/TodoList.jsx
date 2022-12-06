import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function App({ filter }) {
  const [toDos, setToDos] = useState(() => readfromLocal());
  const filtered = getFilteredItems(toDos, filter);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const onAdd = (todo) => {
    setToDos([...toDos, todo]);
  };

  const onUpdate = (updated) =>
    setToDos(toDos.map((t) => (t.id === updated.id ? updated : t)));

  const onDelete = (deleted) => {
    setToDos(toDos.filter((t) => t.id !== deleted.id));
  };

  function getFilteredItems(toDos, filter) {
    if (filter === "all") {
      return toDos;
    }
    if (filter === "active") {
      return toDos.filter((t) => t.status === "active");
    }
    if (filter === "completed") {
      return toDos.filter((t) => t.status === "completed");
    }
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Today's Works: 총 {toDos.length}개</h1>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={onAdd} />
    </section>
  );
}

function readfromLocal() {
  const toDos = localStorage.getItem("toDos");
  return toDos ? JSON.parse(toDos) : [];
}
