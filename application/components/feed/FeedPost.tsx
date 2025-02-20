import { FeedPostForm } from "./FeedPostForm";
import { FeedPostTitle } from "./FeedPostTitle";

export const FeedPost = () => {
  return (
    <>
      <FeedPostTitle historyBack={() => {}} />
      <FeedPostForm />
    </>
  );
};
