'use client'

import { signOut } from 'next-auth/react'
// import { useRouter } from 'next/navigation'


export default  function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <h1 className='text-2xl font-bold'>Welcome ! You are successfully entered...</h1>
       
          <button onClick={() => signOut()}> Sign Out</button>
          
    </main>
  )
}
