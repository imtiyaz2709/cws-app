import Image from 'next/image'
import React from 'react'

const CourseCard = ({value}) => {
  return (
    <div className="flex flex-col shadow-lg border p-3 items-center" >
        <Image src={"/images/"+value.imgUrl} width="0" height="0" sizes="100vw" style= { { width: '100px', height: '100px',objectFit:"cover" }} className="rounded-full" />        
        <h5 className='mt-3 font-'>{value.title}</h5>
        <h6 className=''>{value.duration}</h6>
        <h6 className=''>Rs. {value.fees}</h6>
    </div>
  )
}

export default CourseCard