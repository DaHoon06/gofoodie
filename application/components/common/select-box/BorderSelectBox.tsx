"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import * as styles from "./BorderSelectBox.css";
import { Typography } from "../typography";

export type Items = {
  key: string;
  label: string;
};

export interface SelectBoxProps {
  items: Items[];
  onChange: (value: string) => void;
}

export const BorderSelectBox = (props: SelectBoxProps): ReactElement => {
  const { items, onChange } = props;
  const [currentValue, setCurrentValue] = useState(items[0].label);
  const [showOptions, setShowOptions] = useState(false);

  const selectRef = useRef<HTMLUListElement | null>(null);

  const handleClickSelectOptions = (value: string) => {
    setCurrentValue(value);
    onChange(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as HTMLUListElement)
    ) {
      setShowOptions(false);
    }
  };

  return (
    <div
      aria-selected={true}
      role={""}
      className={styles.BorderSelectBox}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Typography as={"span"} color={"gray400"} fontSize={14}>
        {currentValue}
      </Typography>
      <ul
        ref={selectRef}
        className={styles.selectBoxOptions}
        style={{ maxHeight: showOptions ? "none" : 0 }}
      >
        {items.map((option, index) => {
          return (
            <li
              aria-selected={true}
              role={"option"}
              className={styles.selectBoxOption}
              key={`${option.key}_${index}_${crypto.randomUUID()}`}
              value={option.key}
              onClick={() => handleClickSelectOptions(option.label)}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
