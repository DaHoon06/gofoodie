import { axiosInstance } from "@/shared/libs";

type UserBody = {
  uniqueId: string;
  username: string;
  profileImage?: string;
};

export class UserRepository {
  basePath: string;

  constructor() {
    this.basePath = "/user";
  }

  async signIn(body: UserBody) {
    const url = `${this.basePath}/sign-in`;
    const response = await axiosInstance.post(url, body);
    return response;
  }
}
