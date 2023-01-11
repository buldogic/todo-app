import { FormTask } from "../FormTask";
import cn from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import style from "./index.module.css";
import { Task } from "../../../type";

type Props = {
  tasks: Task[];
  selectedType: boolean | null;
  setTasks: (task: Task[]) => void;
  deleteTask: (index: number) => void;
  setName: (index: number, name: string) => void;
  toggle: (index: number) => void;
};

export function ListToDo(props: Props) {
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

          <TextareaAutosize
            className={style.input}
            value={task.name}
            onChange={(e) => props.setName(index, e.target.value)}
            onBlur={() => props.setName(index, task.name.trim())}
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
