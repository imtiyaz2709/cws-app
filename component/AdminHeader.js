import Link from 'next/link';
import React from 'react'

export const AdminHeader = () => {
  return (
    <div className='flex bg-black text-white px-20 py-3 justify-between items-center'>
        <Link href="/" className='font-semibold text-lg font-sans'>CodeWithSadiQ</Link>
        <div className='flex gap-4 items-center'>
            <Link href="/" className='font-sans text-white px-3 py-1 bg-teal-400 rounded border'>Home</Link>
            <Link href="/course" className='font-sans text-white font-semibold'>Logout</Link>
        </div>
        
    </div>
  )
}

export default AdminHeader;
