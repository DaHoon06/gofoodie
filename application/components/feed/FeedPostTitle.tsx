import { Button, HistoryBackButton } from "../common/button";
import { Typography } from "../common/typography";
import { FiexdTitle } from "../title";
import { IoIosArrowBack } from "react-icons/io";

export const FeedPostTitle = () => {
  return (
    <FiexdTitle title="피드">
      <HistoryBackButton />

      <Button type="submit">
        <Typography as="span" fontSize={14} color={"white000"} fontWeight={300}>
          포스팅
        </Typography>
      </Button>
    </FiexdTitle>
  );
};
