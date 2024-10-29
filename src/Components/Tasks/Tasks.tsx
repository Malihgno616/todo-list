import { useState, FormEvent, useEffect, useContext } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  /*
   [
      { title: 'Tarefa 1', done: boolean, id: number }
   ]
  */

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    console.log(taskTitle);

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarega com menos de 3 letras");
      return;
    }

    // adicione a tarefa
    const newTasks = [
      ...tasks, // pega todas as tarefas que já existem e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false }, // adiciona uma nova tarefa
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskID: number) {
    const newTasks = tasks.map((task) => {
      if (taskID === task.id) {
        return { ...task, done: !task.done };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefas</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
