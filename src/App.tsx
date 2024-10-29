import React from "react";
import { Header } from "./Components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./Components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";

export function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}
