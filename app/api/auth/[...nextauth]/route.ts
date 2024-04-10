import { db } from "@/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
 import NextAuth from "next-auth"
import type { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        // GoogleProvider({
        //   clientId: process.env.GOOGLE_CLIENT_ID!,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
        GithubProvider({
          clientId: "448da6e145159ecde5c2",
          clientSecret: "652567214c8562632b5c89cefa600cb214970958",
        }),
      ],
})

export { handler as GET, handler as POST }