'use client'
import Header from "@/component/Header";
import Image from "next/image";
import React, { useState } from "react";

const next = () => {
 
    const init = {
      name:"",
      father:"",
      mother:"",
      contact:"",
      email:"",
      dob:"",
      gender:"",
      education:"",
      address:""
  }
    const[student,setStudent] = useState(init)

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setStudent((prevStudent) => ({...prevStudent,[name]:value}));

      
    }

    const HandleSubmit =  async(e) => {
      e.preventDefault();
      await fetch("/api/ApplyApi/", {
      method: "POST",
      body: JSON.stringify({
       name:student.name,
       father:student.father,
       mother:student.mother,
       address:student.address,
       education:student.education,
       dob:student.dob,
       gender:student.gender,
       email:student.email,
       contact:student.contact,
    }),
      headers: {
        "content-type": "application/json"
      },
    }).then(resp => resp.json()).then(resp => setStudent(init))

    
    }

  return (
    <>
      <Header />
      <div className="w-full flex">
        <div className="w-5/12">
          <div className="ml-5">
            <Image
              src="/gif/contact.gif"
              alt="gif"
              width="0"
              height="0"
              sizes="100vw"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
        <div className="w-7/12 mx-14">
          <div className="flex flex-col">
            <h1 className="font-sans text-2xl text-teal-700 pt-10 pl-3 font-semibold">
              Apply For Admission
            </h1>
            <form onSubmit={HandleSubmit} method="post">
              <div className="flex flex-col px-2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="px-2 py-1 border rounded w-full"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex px-2 gap-3">
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Father name</label>
                  <input
                    type="text"
                    className="px-2 py-1 border rounded"
                    name="father"
                    value={student.father}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Mother name</label>
                  <input
                    type="text"
                    className="px-2 py-1 border rounded"
                    name="mother"
                    value={student.mother}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex px-2 gap-3">
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Contact</label>
                  <input
                    type="number"
                    className="px-2 py-1 border rounded"
                    name="contact"
                    value={student.contact}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="px-2 py-1 border rounded"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex px-2 gap-3">
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Education</label>
                  <input
                    type="text"
                    className="px-2 py-1 border rounded"
                    name="education"
                    value={student.education}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Date of Birth</label>
                  <input
                    type="date"
                    className="px-2 py-1 border rounded"
                    name="dob"
                    value={student.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Gender</label>
                  <input
                    type="text"
                    className="px-2 py-1 border rounded"
                    name="gender"
                    value={student.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col px-2 flex-1">
                <label htmlFor="">Address</label>
                <textarea
                  rows="5"
                  className="px-2 py-1 border rounded"
                  name="address"
                  value={student.address}
                  onChange={handleChange}
                />
              </div>
              <div>
              <button type="submit" className="px-2 py-1 bg-teal-900 text-white border rounded w-full mt-3 hover:bg-teal-500">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default next;
