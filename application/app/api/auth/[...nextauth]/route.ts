import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";
import { UserRepository } from "@/modules/auth";

const userRepository = new UserRepository();

const clientId = process.env.KAKAO_APP_KEY || "";
const clientSecret = process.env.CLIENT_SECRET || "";
export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async signIn(user: any) {
      try {
        return {
          ...user,
        };
      } catch (e) {
        console.log(e);
      }
    },
    async jwt({ user, token, account }) {
      if (user && Object.entries(user) && account) {
        const body = {
          uniqueId: user.id || "",
          profileImage: user.image || "",
          username: user.name || "",
        };

        const { data } = await userRepository.signIn(body);

        token.apiToken = data.data.token;
        token.id = data.data.uniqueId;
        token.profile = data.data.profileImage;
      }

      return token;
    },
    async session({ token, session }) {
      session.apiToken = token.apiToken as unknown as string;
      session.id = token.id as unknown as string;
      session.profile = token.profile as unknown as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
