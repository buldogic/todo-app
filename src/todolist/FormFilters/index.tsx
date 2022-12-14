import { FilterSelected } from "./FilterSelected";

import style from "./index.module.css";

type Props = {
  selectedType: null | boolean;
  setSelectedType: (type: null | boolean) => void;
  countAll: number;
  countActive: number;
  countCompleted: number;
};

export function FormFilters(props: Props) {
  const isSelectedAll = props.selectedType === null;
  const isSelectedActive = props.selectedType === false;
  const isSelectedCompleted = props.selectedType === true;

  const onClickAll = () => {
    props.setSelectedType(null);
  };
  const onClickActive = () => {
    props.setSelectedType(false);
  };
  const onClickCompleted = () => {
    props.setSelectedType(true);
  };

  return (
    <div className={style.formFilters}>
      <FilterSelected
        isSelected={isSelectedAll}
        onClick={onClickAll}
        text="All"
        num={props.countAll}
      />
      <FilterSelected
        isSelected={isSelectedActive}
        onClick={onClickActive}
        text="Active"
        num={props.countActive}
      />
      <FilterSelected
        isSelected={isSelectedCompleted}
        onClick={onClickCompleted}
        text="Completed"
        num={props.countCompleted}
      />
    </div>
  );
}
