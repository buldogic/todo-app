import { useState } from "react";
import style from "./index.module.css";

type Props = {
  onAddTask: (value: string) => void;

};

export function FormTask(props: Props) {
  const [value, setValue] = useState("");

  const isEmptyText = value.length === 0;

  const addTask = () => {
    if (isEmptyText) return;

    props.onAddTask(value);
    setValue("");
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
        onKeyPress={(e) => {
          const key = e.key;
          if (key === "Enter") {
            addTask();
          }
        }}
      />
      <button className={style.button} onClick={addTask} disabled={isEmptyText}>
        Add
      </button>
    </div>
  );
}
