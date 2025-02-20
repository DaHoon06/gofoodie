type UserType = {
  nickname: string;
  description: string;
  _id: string;
  creatorId: string;
  created_at: Date;
  updated_at: Date;
  type: string;
  profileImage: string;
  files?: any[];
  username: string;
};

export type { UserType };
