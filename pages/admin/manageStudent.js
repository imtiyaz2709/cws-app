
import AdminHeader from '@/component/AdminHeader'
import AdminSidebar from '@/component/AdminSidebar'
import Link from 'next/link'
import React from 'react'

export const getStaticProps = async() =>{
  let data = await fetch("http://localhost:3000/api/studentApi")
  data = await data.json()
  return{
    props:{
      "student":data
    }
  }
}



const handleDelete = async(id) =>{
  await fetch(`http://127.0.0.1:3000/api/student/${id}`,{
    method:"delete",
    headers:{
      "content-type":"application/json"
    }
 })
  .then(resp => resp.json()).then(resp =>alert(resp.msg))
}



const index = ({student}) => {
  return (
    <div>
        <AdminHeader/>
        <div className='flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12 p-5'>
            <div className='flex justify-between'>
              <h2 className='text-3xl font-bold'>Manage Student ({student.data.length})</h2>
              </div>
        
            <table className="w-full border text-center mt-5">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Contact</th>
              <th className="border">Email</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.data.map((value,key) => (
            <tr key={key}>
              <td className="border">{value.name}</td>
              <td className="border">{value.contact}</td>
              <td className="border">{value.email}</td>
              <td>
                <button
                  type="button"
                  className="px-2 py-1 bg-green-700 text-white border rounded"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-2 py-1 bg-red-700 text-white border rounded"
                  onClick={()=> handleDelete(value._id)}
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


