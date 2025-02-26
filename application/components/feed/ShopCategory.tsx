import classNames from "classnames";
import { ReactElement } from "react";
import * as styles from "./ShopCategory.css";
import { FlexBox } from "../common/boxes";
import { Typography } from "../common/typography";
import { BorderSelectBox } from "../common/select-box";

interface ShopCategoryProps {
  item: any[];
  onChangeCategorySelectBox: (value: string) => void;
}

export const ShopCategory = ({
  item,
  onChangeCategorySelectBox,
}: ShopCategoryProps): ReactElement => {
  return (
    <FlexBox
      className={classNames(styles.locationItemWrapper)}
      alignItems={"flex-start"}
      gap={8}
      flexDirection={"column"}
    >
      <Typography color={"gray500"} fontSize={14} fontWeight={500}>
        카테고리
      </Typography>
      <div>
        <BorderSelectBox items={item} onChange={onChangeCategorySelectBox} />
      </div>
    </FlexBox>
  );
};
