import { ReactElement } from "react";
import * as styles from "./ShopTitle.css";
import { FlexBox } from "../common/boxes";
import { Typography } from "../common/typography";

interface ShopTitleProps {
  value: string;
  onChage: (name: string, value: string) => void;
}

export const ShopTitle = (props: ShopTitleProps): ReactElement => {
  const { onChage, value } = props;

  const handleChageInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onChage(name, value);
  };

  return (
    <FlexBox
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      flexDirection={"column"}
      gap={8}
    >
      <Typography color={"gray500"} fontSize={14} fontWeight={500}>
        이름
      </Typography>
      <input
        name="title"
        value={value}
        onChange={handleChageInput}
        className={styles.input}
        type="text"
        placeholder={"방문한 장소의 이름을 입력해주세요."}
      />
    </FlexBox>
  );
};
