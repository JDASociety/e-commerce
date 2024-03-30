import NextAuth from "next-auth"

import type { NextAuthOptions } from "next-auth"

import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"


export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  secret: process.env.NEXTAUTH_SECRETNEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        try {
          const user = { id: 'asdfasdf', name: "J Smith", email: "asdf@hotmail.com" }
          

          return user
        } catch (error) {
          console.error(error)
          return null
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    }    
  },
} satisfies NextAuthOptions

export const { handlers, auth, signIn, signOut } = NextAuth(config)