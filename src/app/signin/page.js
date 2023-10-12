'use client'
import React, {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaApple, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {BsLinkedin, BsDiscord} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'




export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password){
            alert('All fields are required')
            return;
        }

        try {
          const res =   await signIn('credentials', {
                email, password, redirect:false
            })

            if(res.error){
                alert('Invalid Credentials');
                return;
            }

            router.replace('/')  //dashboard
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col md:flex-row md:overflow-hidden md:h-screen w-[full] font-[Montserrat]' style={{ backgroundColor: '#F8FAFF' }}>

            <div className='flex flex-col  bg-blue-600  h-[14rem] md:w-[50%] lg:w-[80%] md:h-[120%] p-2  md:p-20 md:-ml-20 md:-mt-20 text-white md:rotate-[3deg] lg:rotate-[8deg] '>
                <div className=' flex flex-col justify-between p-1 md:p-12 h-[100%]  md:min-h-screen md:rotate-[-3deg] lg:rotate-[-8deg]'>
                    <div className=' text-2xl font-semibold'>logo</div>
                    <div className=' text-5xl font-black mx-auto'>Board.</div>
                    <div className='flex md:text-3xl text-white gap-2 md:gap-5 mx-auto'>
                        <div className=' cursor-pointer'><FaGithub /></div>
                        <div className=' cursor-pointer'><FaSquareXTwitter /></div>
                        <div className=' cursor-pointer'><BsLinkedin /></div>
                        <div className=' cursor-pointer'><BsDiscord /></div>
                    </div>
                </div>
            </div>

            <div className=' flex my-auto items-center justify-center w-[100%] py-10 md:py-0'>
                <div className='flex flex-col gap-8 md:w-[50%] '>
                    <div>
                        <div className=' md:text-2xl font-black text-slate-600'> Sign In</div>
                        <div className=' font-semibold text-slate-700'> sign in to your account</div>
                    </div>
                    <div className=' flex gap-3 mx-auto'>
                        <div onClick={() => signIn('google')} className=' flex items-center gap-1 py-1 px-2 rounded-lg text-slate-500 bg-white shadow-inner cursor-pointer'>
                            <div  className=' text-lg '><FcGoogle /></div>
                            <div className=' text-xs font-semibold'>Sign in with Google</div>
                        </div>
                        <div className=' flex items-center gap-1 py-1 px-2 rounded-lg text-slate-500 bg-white shadow-inner cursor-pointer'>
                            <div className=' text-lg '><FaApple /></div>
                            <div className=' text-xs font-semibold'>Sign in with Apple</div>
                        </div>
                    </div>
                    <div>
                        <form onSubmit = { handleSubmit } className='flex flex-col bg-white shadow-inner p-6 gap-4 rounded-lg'>
                            <div className=' flex flex-col gap-2 text-slate-600'>
                                <label className=' text-sm font-semibold ' htmlFor='email'>Email address</label>
                                <input
                                 value = {email}
                                 onChange = {e => setEmail(e.target.value)}
                                 className='text-sm py-1 px-2 rounded-lg outline-none' type='text' placeholder='enter your email' id='email' name='email' />
                            </div>

                            <div className='flex flex-col gap-2 text-slate-600'>
                                <label className='text-sm font-semibold ' htmlFor='password'>Password</label>
                                <input
                                 value = {password}
                                 onChange = {e => setPassword(e.target.value)}
                                 className='text-sm py-1 px-2 rounded-lg outline-none' type='text' placeholder='enter password' id='password' name='password' />
                            </div>

                            <div className=' text-sm text-blue-600 font-bold cursor-pointer'>Forget password?</div>

                            <button className=' bg-blue-600 py-1.5 rounded-lg text-white font-semibold' type='submit'>Sign In</button>

                        </form>

                    </div>
                    <div className=' text-sm mx-auto text-slate-600'>Don &apos; t have an account?<span
                            onClick = {() => router.push('/signup')}
                            className=' text-blue-600 font-semibold cursor-pointer'>
                            Register here</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
