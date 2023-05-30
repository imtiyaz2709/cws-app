import Link from 'next/link';
import React from 'react'

export const Header = () => {
  return (
    <div className='flex bg-white text-black px-20 py-3 justify-between items-center'>
        <Link href="/" className='font-semibold text-lg font-sans'>CodeWithSadiQ</Link>
        <div className='flex gap-4 items-center'>
            <Link href="/" className='font-sans text-black px-3 py-1 bg-teal-400 rounded border'>Home</Link>
            <Link href="/course" className='font-sans text-black font-semibold'>Courses</Link>
            <Link href="" className='font-sans text-black font-semibold'>Gallery</Link>
            <Link href="/signUp" className='font-sans text-black font-semibold'>SignUp</Link>
            <Link href="" className='font-sans text-black font-semibold'>Login</Link>
        </div>
        <div className='flex gap-4 items-center'>
          <Link href="" className='font-semibold hover:bg-teal-400 px-2 py-1 rounded'>Online payment</Link>
          <Link href="/apply" className="bg-teal-800 text-white px-2 py-1 rounded font-semibold hover:bg-teal-500">Apply For Admission</Link>
        </div>
    </div>
  )
}

export default Header;
