import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs'
import  GoogleProvider  from "next-auth/providers/google";




export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password} = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if(!user){
                        return null;
                    }

                   const passwordMatch =  await bcrypt.compare(password, user.password);

                   if(!passwordMatch){
                    return null;
                   }

                   return user;
                    
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    ],
    callbacks: {
           async signIn({user, account, profile}){
            console.log(user);
            console.log(account);
            return '/';
           }
    },

    session: {
        strategy : 'jwt',
    },
    secret : process.env.NEXTAUTH_SECRET,
    pages: {
        signIn : '/signin'
    }

}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST};