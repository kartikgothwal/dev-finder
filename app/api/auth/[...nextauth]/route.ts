import { db } from "@/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
 import NextAuth from "next-auth"
import type { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_PASSWORD!,
        }),
        GithubProvider({
          clientId: process.env.GITHUB_PROVIDER_CLIENT_ID!,
          clientSecret: process.env.GITHUB_PROVIDER_CLIENT_PASSWORD!,
        }),
      ],
})

export { handler as GET, handler as POST }