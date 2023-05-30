import AdminHeader from '@/component/AdminHeader'
import AdminSidebar from '@/component/AdminSidebar'
import StudentData from '@/component/StudentData'
import React from 'react'


export const getStaticProps = async (req,res) => {
    let student = await fetch("http://localhost:3000/api/ApplyApi")
    student = await student.json();

    
    return{
        props:{student}
    }
}

const index = ({student}) => {
  return (
    <div>
        <AdminHeader/>
        <div className='flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12'>
                <StudentData data={student} count={student.data.length}/>
            </div>
        </div>
    </div>
  )
}

export default index