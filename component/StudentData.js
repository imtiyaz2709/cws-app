import { useRouter } from 'next/router'
import React from 'react'

const StudentData = ({data,count}) => {
   
    const handleDlt = async(id) => {
        let deletedData = await fetch(`http://127.0.0.1:3000/api/applydlt/${id}`,{method:"delete",headers:{
            'content-type':"application/json"
        }})
        deletedData = await deletedData.json()
        alert("data deleted")

    }

  return (
    <div className='p-4'>
        <h2 className='text-3xl font-bold'>Manage Apply Student ({count})</h2>
        <table className="border w-full mt-3">
            <thead>
                <tr>
                    <th className='border'>Id</th>
                    <th className='border'>Name</th>
                    <th className='border'>Email</th>
                    <th className='border'>Contact</th>
                    <th className='border'>Father</th>
                    <th className='border'>Mother</th>
                    <th className='border'>Dob</th>
                    <th className='border'>Gender</th>
                    <th className='border'>Address</th>
                    <th className='border'>Education</th>
                    <th className='border'>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                data.data.map((value,key) => (
                    <tr key={key}>
                    <td className='border p-1'>{key+1}</td>
                    <td className='border p-1'>{value.name}</td>
                    <td className='border p-1'>{value.email}</td>
                    <td className='border p-1'>{value.contact}</td>
                    <td className='border p-1'>{value.father}</td>
                    <td className='border p-1'>{value.mother}</td>
                    <td className='border p-1'>{value.dob}</td>
                    <td className='border p-1'>{value.gender}</td>
                    <td className='border p-1'>{value.address}</td>
                    <td className='border p-1'>{value.education}</td>
                    <td className='border p-1'>
                        <button type='button'onClick={()=>handleDlt(value._id)} className='px-2 py-1 bg-red-700 text-white rounded border'>Delete</button>
                        
                    </td>
                </tr>
                ))
               }
            </tbody>
        </table>
    </div>
  )
}

export default StudentData