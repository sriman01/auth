'use client'

import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {FaApple, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {BsLinkedin, BsDiscord} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();


    const handleSubmit =async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert('All fields are necessary');
            return;
        }

        try {
            const resUserExit = await fetch('api/userExits', {
                method : "POST", 
                headers: {
                    "content-Type" : "application/json"
                },
                body: JSON.stringify({ email })
            })
           const res =  await fetch('api/register', {
                method : 'POST',
                headers: {
                    "content-Type" : "application/json"
                }, 
                body : JSON.stringify({
                    name, email, password
                })
            });

            const { user } = await resUserExit.json();
            
            if(user){
                alert('user already exit');
                return;
            }

            if(res.ok){
                const form = e.target;
                form.reset();
                router.push('/signin')
            }
            else{
                console.log('user registration failed.')
            }
            
        } catch (error) {
            console.log("error during registration", error)
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

            <div className=' flex my-auto items-center justify-center w-[100%] py-10 md:py-0 '>
                <div className='flex flex-col gap-8 md:w-[50%] '>
                    <div>
                        <div className=' text-2xl font-black text-slate-600'> Welcome Dear!</div>
                        <div className=' font-semibold text-slate-700'>Register Here ...</div>
                    </div>
                    <div className=' flex gap-3 mx-auto'>
                        <div className=' flex items-center gap-1 py-1 px-2 rounded-lg text-slate-500 bg-white shadow-inner cursor-pointer'>
                            <div className=' text-lg'><FcGoogle /></div>
                            <div className=' text-xs font-semibold'>Register with Google</div>
                        </div>
                        <div className=' flex items-center gap-1 py-1 px-2 rounded-lg text-slate-500 bg-white shadow-inner cursor-pointer'>
                            <div className=' text-lg '><FaApple /></div>
                            <div className=' text-xs font-semibold'>Register with Apple</div>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='flex flex-col bg-white shadow-inner p-6 gap-4 rounded-lg'>
                            <div className='flex flex-col gap-2 text-slate-600'>
                                <label className='text-sm font-semibold' htmlFor='fname'>Full Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='text-sm py-1 px-2 rounded-lg outline-none' type='text' placeholder='Enter Your Name' id='fname' name='fname' />
                            </div>
                            <div className=' flex flex-col gap-2 text-slate-600'>
                                <label className=' text-sm font-semibold ' htmlFor='email'>Email address</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className='text-sm py-1 px-2 rounded-lg outline-none' type='text' placeholder='Enter Your Email' id='email' name='email' />
                            </div>

                            <div className='flex flex-col gap-2 text-slate-600'>
                                <label className='text-sm font-semibold ' htmlFor='password'>Password</label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className='text-sm py-1 px-2 rounded-lg outline-none' type='text' placeholder='Enter Password' id='password' name='password' />
                            </div>
                            <button className=' bg-blue-600 py-1.5 rounded-lg text-white font-semibold' type='submit'>Sign Up</button>

                        </form>

                    </div>
                    <div className=' text-sm mx-auto text-slate-600'>Already Registered?
                        <span
                            onClick={() => router.push('/signin')}
                            className=' text-blue-600 font-semibold cursor-pointer'>
                            Sign In</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
