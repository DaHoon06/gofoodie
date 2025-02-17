export interface FeedUser {
  username: string;
  id: string;
}

export interface FeedPostBody {
  content: string;
  files: File[];
  item: FeedItem;
}

export interface AddressState {
  name: string;
  sigungu: string;
  sido: string;
  x: string;
  y: string;
}

export interface FeedItem {
  title: string;
  category: string;
  address: AddressState;
}
