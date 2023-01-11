
import cn from "classnames";
import style from "./index.module.css";

type Props ={
onClick: ()=> void
text: string
num: number
isSelected: boolean
}

export function FilterSelected(props: Props) {
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
