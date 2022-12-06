import TodoList from "./components/TodoList/TodoList";
import Header from "./components/header/Header";
import React from "react";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

export default function App() {
  const [filter, setFliter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFliter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
