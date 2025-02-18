import { BASE_URL } from "@/shared/config";
import { Fetcher } from "@/shared/libs";

export class AuthRepository {
  private fetcher: Fetcher;

  constructor() {
    this.fetcher = new Fetcher(`${BASE_URL}/auth`);
  }

  /**
   *
   * @param {string} id 카카오에서 부여 받은 식별 아이디
   */
  async userVerify(id: string) {
    console.log(`카카오에서 부여 받은 id는 ${id} 입니다.`);
    console.log(`${BASE_URL}/auth`);
    const response = await this.fetcher.get<any>(`/user-verify/${id}`);
    console.log(response);
  }
}
