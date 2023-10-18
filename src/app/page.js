'use client'
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

export default  function Home() {


  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // If the session is still loading, you can handle it here
    if (status === 'loading') {
      // You can render a loading spinner or some other UI element.
    }
  }, [status]);

  async function handleSignout() {
    router.push('/signin')
  }

  if (status === 'loading') {
    return <div className='flex justify-center items-center text-xl font-bold text-white'>Loading...</div>; // Render a loading indicator
  }
  

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <h1 className='text-2xl font-bold'>Welcome {session?.user?.name} ! You are successfully entered...</h1>
       
          <button onClick={handleSignout}> Sign Out</button>


          <div className=' flex gap-5 text-black bg-white py-3 px-8'>
          <button onClick={() => router.push('/signin')} className='bg-slate-300 px-2 py-1 rounded-md' > Sign in</button>
          <button onClick={() => router.push('/signup')} className='bg-slate-300 px-2 py-1 rounded-md'> Sign up</button>
          <button onClick={() => router.push('/dashboard')} className='bg-slate-300 px-2 py-1 rounded-md'>Dashboard</button>
          </div>
          
    </main>

  )
}
