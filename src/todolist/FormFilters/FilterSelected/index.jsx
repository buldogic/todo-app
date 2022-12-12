import React from "react";
import cn from "classnames";
import style from "./index.module.css";

export function FilterSelected(props) {
  return (
    <div
      onClick={() => {
        props.onClick();
      }}
      className={cn(
        style.filterSelected,
        props.isSelected ? style.selected : null
      )}
    >
      <p className={style.textFilter}>{props.text}</p>
      <p className={style.numFilter}>{props.num}</p>
    </div>
  );
}
