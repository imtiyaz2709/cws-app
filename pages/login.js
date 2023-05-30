'use client'
import Header from "@/component/Header";
import Image from "next/image";
import React, { useState } from "react";

const login = () => {
  const initdata = {
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
   
  }
    
  return (
    <>
      <Header />
      <div className="w-full flex">
       
        <div className="w-4/12 mx-auto border shadow p-5 mt-5">
          <div className="flex flex-col ">
            <h1 className="font-sans text-2xl text-teal-700 pl-3 font-semibold">
             Login
            </h1>
            <form method="post" onSubmit={handleSubmit}>
            
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
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
