
import AdminHeader from '@/component/AdminHeader'
import AdminSidebar from '@/component/AdminSidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {

  const router = useRouter()
  const course_id = router.query.courseid
  return (
    <div>
        <AdminHeader/>
        <div className='flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12 p-5'>
            <div className='flex justify-between'>
              <h2 className='text-3xl font-bold'>Manage Courses ({course_id})</h2>
              <Link href="/admin/insertCourse" className='bg-green-600 hover:bg-green-900 text-white px-3 py-2 rounded'>Add Course</Link>
              </div>
        
            <table className="w-full border text-center mt-5">
          <thead>
            <tr>
              <th className="border">Title</th>
              <th className="border">Author</th>
              <th className="border">Fees</th>
              <th className="border">Mode</th>
              <th className="border">Description</th>
              <th className="border">Duration</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
    </div>
  )
}

export default index


