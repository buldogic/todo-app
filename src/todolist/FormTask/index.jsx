import React from "react";
import { useState } from "react";
import style from "./index.module.css";

export function FormTask(props) {
  const [value, setValue] = useState("");

  const isEmptyText = value.length === 0;

  const addTask = () => {
    if (isEmptyText) return;

    props.onAddTask(value);
    setValue("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className={style.formTask}>
      {" "}
      <input
        type="text"
        value={value}
        className={style.task}
        placeholder="Task text"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className={style.button} onClick={addTask} disabled={isEmptyText}>
        Add
      </button>
    </div>
  );
}
