'use client'
import AdminHeader from "@/component/AdminHeader";
import AdminSidebar from "@/component/AdminSidebar";
import Header from "@/component/Header";
import Image from "next/image";
import React, { useState } from "react";

const Course = () => {
  const initdata = {
    title:"",
    author:"",
    fees:"",
    description:"",
    mode:"",
    duration:""
    
  }
  const [course,setCourse] = useState(initdata)
  const handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;

     setCourse((prev) => ({...prev,[name]:value}))
     
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/courseApi",{
        method:"post",
        body:JSON.stringify(course),
        headers:{
            "content-type":"application/json",
        }
    }).then(resp => resp.json()).then(resp => setCourse(initdata))
  }
    
  return (
    <>
      <AdminHeader />
      <div className='flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12'>
            <div className="mx-auto">
          <div className="flex flex-col">
            <h1 className="font-sans text-2xl text-teal-700 pt-10 pl-3 font-semibold">
              Insert Details Here: 
            </h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="flex flex-col px-2">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="title"
                  onChange={handleChange}
                  value={course.title}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Author</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="author"
                  onChange={handleChange}
                  value={course.author}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Fees</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="fees"
                  value={course.fees}
                  onChange={handleChange}

                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Mode of Training</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="mode"
                  value={course.mode}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Duration</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="duration"
                  value={course.duration}
                  onChange={handleChange}
                />
              </div>
            
              <button type="submit" className="px-2 py-1 bg-teal-900 text-white border rounded w-full mt-3 hover:bg-teal-500">SUBMIT</button>
            </form>
          </div>
        </div>
            </div>
      </div>
    </>
  );
};

export default Course;
