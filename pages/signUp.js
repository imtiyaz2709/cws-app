'use client'
import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const signUp = () => {
  const initdata = {
    name:"",
    contact:"",
    email:"",
    password:""
  }
  const [user,setUser] = useState(initdata)
  const handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;

     setUser((prev) => ({...prev,[name]:value}))
     
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/studentApi",{
        method:"post",
        body:JSON.stringify(user),
        headers:{
            "content-type":"application/json",
        }
    }).then(resp => resp.json()).then(resp => setUser(initdata))
  }
    
  return (
    <>
      <Header />
      <div className="w-full flex">
       
        <div className="w-7/12 mx-auto">
          <div className="flex flex-col">
            <h1 className="font-sans text-2xl text-teal-700 pt-10 pl-3 font-semibold">
              Create an Account 
            </h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="flex flex-col px-2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="name"
                  onChange={handleChange}
                  value={user.name}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Contact</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="contact"
                  onChange={handleChange}
                  value={user.contact}
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="email"
                  value={user.email}
                  onChange={handleChange}

                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            
              <button type="submit" className="px-2 py-1 bg-teal-900 text-white border rounded w-full mt-3 hover:bg-teal-500">Add</button>
            </form>

            <p>Already have an Account? <Link href='/login' className="text-blue-500">Click Here</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUp;
