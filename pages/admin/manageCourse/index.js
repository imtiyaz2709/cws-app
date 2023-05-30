
import AdminHeader from '@/component/AdminHeader'
import AdminSidebar from '@/component/AdminSidebar'
import Link from 'next/link'
import React from 'react'

export const getStaticProps = async() =>{
  let data = await fetch("http://localhost:3000/api/courseApi")
  data = await data.json()
  return{
    props:{
      data
    }
  }
}

const handleDelete = async (id) =>{
    const data = await fetch(`http://127.0.0.1:3000/api/course/${id}`,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(resp => alert("data deleted successfully"))
} 

const index = ({data}) => {
  return (
    <div>
        <AdminHeader/>
        <div className='flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12 p-5'>
            <div className='flex justify-between'>
              <h2 className='text-3xl font-bold'>Manage Courses ({data.imtiyaz.length})</h2>
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
            {
              data.imtiyaz.map((value,key) => (
                <tr>
              <td className="border">{value.title}</td>
              <td className="border">{value.author}</td>
              <td className="border">{value.fees}</td>
              <td className="border">{value.mode}</td>
              <td className="border">{value.description}</td>
              <td className="border">{value.duration} months</td>
              <td>
                <button
                  type="button"
                  className="px-2 py-1 bg-green-700 text-white border rounded"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-2 py-1 bg-blue-700 text-white border rounded"
                >
                  View
                </button>
                <button onClick={() => handleDelete(value._id)}
                  type="button"
                  className="px-2 py-1 bg-red-700 text-white border rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
            </div>
        </div>
    </div>
  )
}

export default index


