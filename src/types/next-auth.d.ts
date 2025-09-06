// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    user: {
      name: string;
      email: string;
      role: string;
    };
    token: string;
  }

  interface Session {
    user: User.user;
  }
}
