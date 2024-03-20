import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      // 1. connect to database
      // 2. check if user exists
      // 3. if not, then add user to database
      // 4. return true to allow sign in
    },
  },
  // Another callback that modifies the session object
  async session({ session }) {
    // 1. Get the user from Database
    // 2. Assign  the user id to the session
    // 3. Return the modified session
  },
};
