import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const Courses = () => {
const [CourseData, setCourseData] = useState([])
const [AddCourseVisible, setAddCourseVisible] = useState(false)
const getCourseDetails=async()=>{
  const courses=await axios.get("CourseData.json")
  setCourseData(courses.data)
  const CourseDetails=localStorage.getItem("courses")
  localStorage.setItem("courses",JSON.stringify(courses.data))

  
}

useEffect(()=>{
  getCourseDetails()
},[])

const Search=(e)=>{
  console.log(e.target.value)
  
  if(e.target.value.trim()===""){
   const data=JSON.parse(localStorage.getItem("courses"))
   console.log(data)
   setCourseData(data)
   console.log(CourseData)
  
  }
  if(e.target.value.trim()!==""&&e.target.value.length >=1){
    const filteredResults=CourseData.filter((item)=>item.course_name.toUpperCase().startsWith(e.target.value.toUpperCase()))
    setCourseData(filteredResults)
  }

  
 

  

}
  return (
    <div className=' ml-[7rem] p-4 bg-[#f4f4f4] relative mb-4'>
      <h1 className='text-4xl text-[#83858b] font-bold'>Courses</h1>
      <div className='flex items-center justify-between mt-4'>
        <h2 className='text-[#83858b] text-xl'>COURSE LIST</h2>
        <div className='relative flex items-center justify-around border border-slate-300 rounded-lg bg-white w-[250px]'>
          <input type="text" placeholder='Search here' className=' border-0 focus:outline-none focus:ring-0 placeholder:pl-[50px]' onChange={(e)=>Search(e)} />
          <CiSearch className='absolute left-1 text-xl'></CiSearch>
        </div>
      </div>
      <div className='mt-4 w-full overflow-x-scroll'>

        {
          CourseData.length<=0 && <Bars></Bars>
        }
        {
          CourseData.length > 0 &&

          <table className='w-full bg-white table-auto overflow-x-scroll' id='course_table'>
          <thead className='border-slate-200 border-b-2 '>
              <tr className='p-2'>
                  <th className='p-4'>
                     Name
                  </th>
                  <th className='p-4'>
                   Description
                  </th>
                  <th className='p-4'>
                  Instructor
                  </th>
                  <th className='p-4'>
                      Instrument
                  </th>
                  <th className='p-4 text-nowrap'>
                      Day of Week
                  </th>
                  <th className='p-4'>
                    No.of.Students
                  </th>
                  <th className='p-4'>
                    Price
                  </th>
                  <th className='p-4'>
                      Status
                  </th>
                  <th className='p-4'>
                     Actions
                  </th>
              </tr>
          </thead>
          <tbody>
             
              {
                  CourseData.map((items,ind)=>{
                      return(<tr className='border-slate-200 border-b-[1px]'>
                          <td className='text-center p-2'>
                              {
                                  items.course_name
                              }

                          </td>
                          <td className='text-center p-4 line-clamp-3'>
                              {
                                  items.description
                              }

                          </td>
                          <td className='text-center p-2'>
                              {
                                  items.instructor_name
                              }

                          </td>
                          <td className='text-center p-2'>
                              {
                                  items.instrument_name
                              }

                          </td>
                          <td className='text-center p-2'>
                              {
                                  items.day_of_week
                              }

                          </td>
                          <td className='text-center p-2'>
                              {
                                  items.number_of_students
                              }

                          </td>
                          <td className='text-center p-2'>
                              ${
                                  items.price
                              }

                          </td>
                          <td className={`text-center `}>
                              <button className={`${items.status==="active"? "bg-green-300":"bg-transparent"} ${items.status==="closed"? "bg-red-300":"bg-transparent"} ${items.status==="archived"? "bg-slate-300":"bg-transparent"}  p-2 rounded-sm capitalize`}>
                              {
                                  items.status
                              }
                              </button>

                          </td>
                          <td className='text-center p-8'>
                            <BsThreeDotsVertical></BsThreeDotsVertical>

                          </td>
                        


                      </tr>)
                  })
              }
            
              
          </tbody>
           </table>

        }

      </div>

     <div className='bg-red-400 p-4 w-42 rounded-lg absolute right-5 mt-4 mb-12 cursor-pointer'>
      <div className='flex items-center gap-2'>
        <FaPlus></FaPlus>
        <span className='text-nowrap' onClick={()=>setAddCourseVisible(!AddCourseVisible)}>Add Course</span>

      </div>

     

     
     </div>
     {
      AddCourseVisible && 
      <div className='mt-20 container-sm bg-white p-2 absolute w-[80%] flex items-center flex-col top-[5rem] justify-center'>
      <h1 className='text-3xl'>Add Course</h1>
      <form className='flex flex-col gap-2 rounded-sm mt-2 w-full'>
     
        <input type="text" placeholder='Course Name' className='border-slate-300 rounded-lg' />
        <input type="text" placeholder='Description' className='border-slate-300 rounded-lg' />
        <input type="text" placeholder='Instructor' className='border-slate-300 rounded-lg' />
        <input type="text" placeholder='Instrument' className='border-slate-300 rounded-lg'/>
        <input type="text" placeholder='Day of Week' className='border-slate-300 rounded-lg' />
        <input type="text" placeholder='Price'  className='border-slate-300 rounded-lg' />
      </form>
      <div className='p-2 flex gap-6 items-end justify-end'>
        <button className='p-2 bg-slate-200'>Cancel</button>
        <button className='p-2 bg-red-300 rounded-lg'>Add Course</button>
      </div>
    </div>
      

     }

   

        
    </div>
  )
}

export default Courses