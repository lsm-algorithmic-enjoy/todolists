import TodoList from "./components/TodoList/TodoList";
import Header from "./components/header/Header";
import { useState } from "react";

const filters = ["all", "active", "completed"];

export default function App() {
  const [filter, setFliter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFliter} />
      <TodoList filter={filter} />
    </>
  );
}
