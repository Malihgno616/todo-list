import React, { useContext, useState } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  // const [estado, funcaoParaAlterarOEstado] = useState(0);
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vindo, Ackin</span>
        </div>

        <div>{/* Cards*/}</div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendendtes" value={totalPending} />
          <StatsCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
