import Header from "@/component/Header";
import CourseCard from "@/component/CourseCard";
import Banner from "@/component/Banner";

export const getStaticProps = async()=>{
  let data = await fetch("http://localhost:3000/api/courseApi")
    data = await data.json()
  return {
    props:{data}
  }
}

export default function Home({data}) {
  return (
    <>
      <Header />
      <div className="w-full px-20">
        <Banner />
        <div className="pt-28">
          <h1 className="text-2xl font-semibold text-teal-600">Our Courses</h1>
        </div>
        <div className="grid grid-cols-6 my-7 gap-3">
          {data.imtiyaz.map((value, key) => (
            <CourseCard value={value} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}
