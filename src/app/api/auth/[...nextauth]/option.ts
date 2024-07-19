import { type NextAuthOptions } from "next-auth";
// import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

interface MyCredentials {
  email: string;
  password: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const { email, password } = credentials as MyCredentials;

        const user = {
          role: "admin",
          email: "user@test.com",
          password: "12345",
        };

        if (user?.email !== email) {
          throw new Error("User not found!");
        }

        // const isMatched = await compare(password, user?.password);
        const isMatched = user?.password == password;

        if (!isMatched) {
          throw new Error("Password not Matched!");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
