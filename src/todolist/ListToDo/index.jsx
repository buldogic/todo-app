import React from "react";
import { FormTask } from "../FormTask";
import cn from "classnames";
import style from "./index.module.css";

export function ListToDo(props) {
  const result = props.tasks
    .filter((task) => {
      const isOk =
        props.selectedType === null || props.selectedType === task.isDone;
      return isOk;
    })
    .map((task, index) => {
      return (
        <div className={style.task} key={index}>
          <div
            onClick={() => {
              props.toggle(index);
            }}
            className={cn(style.check, task.isDone ? style.done : style.unDone)}
          ></div>

          <input
            className={style.input}
            value={task.name}
            onChange={(e) => props.setName(index, e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.target.blur();
              }
            }}
          />

          <div
            onClick={() => props.deleteTask(index)}
            className={style.deleteCheck}
          ></div>
        </div>
      );
    });

  return (
    <div className={style.listToDoTask}>
      <div className={style.formTaskSearch}>
        <FormTask
          onAddTask={(name) =>
            props.setTasks([...props.tasks, { name, isDone: false }])
          }
        />
      </div>
      <div className={style.textRecords}>
        {result.length ? result : <p className={style.text}>No records</p>}
      </div>
    </div>
  );
}
