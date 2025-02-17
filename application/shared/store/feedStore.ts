import { FeedItem } from "@/typings/interfaces/feeds/feedPost";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type FeedInitialState = {
  item: FeedItem;
};

export type LocationState = Omit<FeedItem, "address">;

type SetFeedStore = {
  setFeedItem: (item: FeedItem) => void;
};

const initialState: FeedInitialState = {
  item: {
    title: "",
    category: "",
    address: {
      name: "",
      sigungu: "",
      sido: "",
      x: "",
      y: "",
    },
  },
};

const useFeedStore = create(
  devtools(
    combine<FeedInitialState, SetFeedStore>(initialState, (set) => ({
      setFeedItem: (item: FeedItem) => set(() => ({ item })),
    }))
  )
);

export default useFeedStore;
