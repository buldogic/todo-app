import React, { useState, useEffect } from "react";

import { FormFilters } from "./FormFilters";
import { ListToDo } from "./ListToDo";
import style from "./index.module.css";

const TASK_LS_KEY = "tasks";

const initialTasks = JSON.parse(localStorage.getItem(TASK_LS_KEY)) ?? [];

export function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    // storing input name
    localStorage.setItem(TASK_LS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const setName = (index, newName) => {
    const newTasks = tasks.map((task, i) => {
      if (i !== index) {
        return task;
      }
      const newTask = { ...task, name: newName };
      return newTask;
    });
    setTasks(newTasks);
  };

  const toggle = (index) => {
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

  const deleteTask = (index) => {
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
