import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex">
    <div className="w-7/12">
      <h1 className="text-6xl font-sans text-teal-700 font-semibold pt-24">
        Skill hai,
      </h1>
      <h1 className="text-6xl font-sans text-teal-700 font-semibold pt-4">
        Toh Future Hai!
      </h1>
      <p className="text-teal-700 pt-3 font-sans font-semibold">
        "CWS is an on-demand marketplace for top Programming engineers,
        developers,
        <br />
      </p>
      <p className="mt-3 text-teal-700 font-sans">
      consultants, architects, programmers, and tutors. Get your
        projects built by
        <br />
        vetted web programming freelancers or learn from expert mentors
        with team <br />
        training & coaching experiences in Project based training."
      </p>
      <Link href="/apply">
        <button className="px-5 py-2 text-white bg-teal-800 rounded mt-4">
          Join now
        </button>
      </Link>
    </div>
    <div className="w-5/12">
      <Image src="/gif/comp.gif" width="0" height="0" sizes='100vw'  style={{width:"100%",height:"auto"}}/>
    </div>
  </div>
  )
}

export default Banner