import { PropsWithChildren } from "react";
import * as styles from "./FixedTitle.css";

interface FiexdTitleProps extends PropsWithChildren {
  title: string;
}

export const FiexdTitle = ({ title, children }: FiexdTitleProps) => {
  return (
    <header className={styles.titleBoxLayout}>
      <div className={styles.childrenContainer}>{children}</div>
      <div className={styles.title}>{title}</div>
    </header>
  );
};
