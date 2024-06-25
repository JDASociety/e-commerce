import NextAuth from 'next-auth'

import type { NextAuthConfig } from 'next-auth'

import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export const config = {
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/register',
	},
	secret: process.env.AUTH_SECRET,
	providers: [
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				try {
					const user = {
						id: 'asdfasdf',
						name: 'J Smith',
						email: 'asdf@hotmail.com',
					}

					return user
				} catch (error) {
					console.error(error)
					return null
				}
			},
			type: 'credentials',
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true
		},
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
	},
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
