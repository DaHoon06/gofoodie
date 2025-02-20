import { FiexdTitle } from "../title";
import { IoIosArrowBack } from "react-icons/io";

interface FeedPostTitleProps {
  historyBack: () => void;
}

export const FeedPostTitle = ({ historyBack }: FeedPostTitleProps) => {
  return (
    <FiexdTitle title="피드">
      <button>
        <IoIosArrowBack size={18} color={"#7a7a7a"} />
      </button>
      <button>포스팅 버튼</button>
    </FiexdTitle>
  );
};
