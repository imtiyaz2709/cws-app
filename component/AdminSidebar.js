import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
  return (
    <div>
        <aside className='flex flex-col bg-black h-[90vh]'>
            <Link href="/admin" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Dashboard</Link>
            <Link href="/admin/manageStudent" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Manage Student</Link>
            <Link href="/admin/manageCourse" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Manage Course</Link>
            <Link href="" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Manage Fees</Link>
            <Link href="" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Manage Placements</Link>
            <Link href="" className="w-full px-3 py-2 text-red-300 hover:bg-red-700 hover:text-white">Logout</Link>
           
           
        </aside>
    </div>
  )
}

export default AdminSidebar