import { useState, useEffect } from "react";
import { FormFilters } from "./FormFilters";
import { ListToDo } from "./ListToDo";
import style from "./index.module.css";
import { Task } from "../../type";

const TASK_LS_KEY = "tasks";



const getInitialTasks = () => {
  const data = localStorage.getItem(TASK_LS_KEY);
  if (data === null) {
    return [];
  }

  return JSON.parse(data) as Task[];
};

export function TodoList() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [selectedType, setSelectedType] = useState< null| boolean>(null);

  useEffect(() => {
    // storing input name
    localStorage.setItem(TASK_LS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const setName = (index: number, newName: string) => {
    const newTasks = tasks.map((task, i) => {
      if (i !== index) {
        return task;
      }
      const newTask = { ...task, name: newName };
      return newTask;
    });
    setTasks(newTasks);
  };

  const toggle = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTask = tasks.filter((task, i) => {
      return i !== index;
    });
    setTasks(newTask);
  };

  const countAll = tasks.length;

  const countActive = tasks.filter((t) => {
    return false === t.isDone;
  }).length;

  const countCompleted = countAll - countActive;

  return (
    <div className={style.bodyToDo}>
      <div className={style.todo}>
        <FormFilters
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          countAll={countAll}
          countActive={countActive}
          countCompleted={countCompleted}
        />
        <ListToDo
          selectedType={selectedType}
          setTasks={setTasks}
          tasks={tasks}
          toggle={toggle}
          deleteTask={deleteTask}
          setName={setName}
        />
      </div>
    </div>
  );
}
