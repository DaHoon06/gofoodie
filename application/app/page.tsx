import * as styles from "./page.css";
import { FeedSkeleton } from "@/components/common/skeleton/FeedSkeleton";
import { MyFeedSkeleton } from "@/components/common/skeleton/MyFeedSkeleton";
import { HorizontalBar } from "@/components/navigation/HorizontalBar";
import FlexBox from "@/components/common/boxes/FlexBox";
import { AvatarCardSkeleton } from "@/components/common/skeleton/AvatarCardSkeleton";
import { MapRenderer } from "@/components/map";

export default async function Home() {
  return (
    <div className={styles.homeContainerLayout}>
      <MapRenderer />
      <HorizontalBar>
        <div>
          <FlexBox gap={12}>
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
            <MyFeedSkeleton isLoading={true} />
          </FlexBox>
        </div>
      </HorizontalBar>

      <HorizontalBar>
        <div>
          <FlexBox gap={12}>
            <AvatarCardSkeleton isLoading={true} />
            <AvatarCardSkeleton isLoading={true} />
            <AvatarCardSkeleton isLoading={true} />
            <AvatarCardSkeleton isLoading={true} />
            <AvatarCardSkeleton isLoading={true} />
            <AvatarCardSkeleton isLoading={true} />
          </FlexBox>
        </div>
      </HorizontalBar>

      <div>
        <FlexBox flexDirection={"column"}>
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
          <FeedSkeleton isLoading={true} />
        </FlexBox>
      </div>
    </div>
  );
}
