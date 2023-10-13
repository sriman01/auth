'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default  function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <h1 className='text-2xl font-bold'>Welcome ! You are successfully entered...</h1>
       
          <button onClick={() => signOut()}> Sign Out</button>


          <div className=' flex gap-5 text-black bg-white py-3 px-8'>
          <button onClick={() => router.push('/signin')} className='bg-slate-300 px-2 py-1 rounded-md' > Sign in</button>
          <button onClick={() => router.push('/signup')} className='bg-slate-300 px-2 py-1 rounded-md'> Sign up</button>
          <button onClick={() => router.push('/dashboard')} className='bg-slate-300 px-2 py-1 rounded-md'>Dashboard</button>

          </div>
          
    </main>
  )
}
