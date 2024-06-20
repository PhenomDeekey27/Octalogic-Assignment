import React, { useEffect } from 'react'

import { useState } from 'react'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import PeopleImg from "../Assests/people.png"

const Home = () => {

    const [studentsData, setstudentsData] = useState([])
    const [BestStudents, setBestStudents] = useState([])


    const getStudentData=async()=>{

        const info=await axios.get("studentData.json")
       
        setstudentsData(info.data)
        console.log(studentsData)
      
    }

    const getBestStudents=async()=>{
        const student=await axios.get("BestStudents.json")
        setBestStudents(student.data)

    }

    useEffect(()=>{
        getStudentData()
        getBestStudents()
    },[])
   
  

  return (
    <div className='flex'>
       
        <div id="main" className='bg-[#f4f4f4] p-4 ml-[7rem]'>
            <h1 className='text-5xl text-[#83858b] font-semibold font-slate'>Overview</h1>
            <div className='mt-8 flex gap-4 p-2 flex-wrap'>
                <div className='bg-white w-60 flex items-center gap-4 p-4 relative'>
                    <div>
                    <img src={PeopleImg} alt="" className='w-12'/>

                    </div>
                    <div>
                        <p className='text-2xl'>164</p>
                        <p className='text-slate-400'>total number of students</p>
                    </div>
                    <p className='absolute right-8 bottom-2 text-[#b33086] font-semibold'>view</p>
                    
                </div>
                <div className='bg-white w-60 flex items-center gap-4 p-4 relative'>
                    <div>
                    <img src={PeopleImg} alt="" className='w-12'/>

                    </div>
                    <div>
                        <p className='text-2xl'>164</p>
                        <p className='text-slate-400'>total number of students</p>
                    </div>
                    <p className='absolute right-8 bottom-2 text-[#b33086] font-semibold'>view</p>
                    
                </div>
                <div className='bg-white w-60 flex items-center gap-4 p-4 relative'>
                    <div>
                    <img src={PeopleImg} alt="" className='w-12'/>

                    </div>
                    <div>
                        <p className='text-2xl'>164</p>
                        <p className='text-slate-400'>total number of students</p>
                    </div>
                    <p className='absolute right-8 bottom-2 text-[#b33086] font-semibold'>view</p>
                    
                </div>
                <div className='bg-white w-60 flex items-center gap-4 p-4 relative'>
                    <div>
                    <img src={PeopleImg} alt="" className='w-12'/>

                    </div>
                    <div>
                        <p className='text-2xl'>164</p>
                        <p className='text-slate-400'>total number of students</p>
                    </div>
                    <p className='absolute right-8 bottom-2 text-[#b33086] font-semibold'>view</p>
                    
                </div>
                <div className='bg-white w-60 flex items-center gap-4 p-4 relative'>
                    <div>
                    <img src={PeopleImg} alt="" className='w-12'/>

                    </div>
                    <div>
                        <p className='text-2xl'>164</p>
                        <p className='text-slate-400'>total number of students</p>
                    </div>
                    <p className='absolute right-8 bottom-2 text-[#b33086] font-semibold'>view</p>
                    
                </div>
            </div>
            <div className='p-2'>
                <div className='flex items-center justify-between'>
                <h1 className='font-sans font-semibold text-[#83858b] text-xl'>LATEST ENROLMENTS</h1>
                <p className=' text-[#b33086]'>View All Courses</p>
                </div>
               
               <div className='mt-4'>
                {
                    studentsData.length<=0 && 
                    <Bars></Bars>
                }
                {
                    studentsData.length > 0 && 

                    <table className='w-full bg-white table-auto'>
                    <thead className='border-slate-200 border-b-2 '>
                        <tr className='p-2'>
                            <th className='p-4'>
                                Enr.no
                            </th>
                            <th className='p-4'>
                                S.Name
                            </th>
                            <th className='p-4'>
                            C.Name
                            </th>
                            <th className='p-4'>
                                Fees
                            </th>
                            <th className='p-4'>
                                Enr.Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            studentsData.map((items,ind)=>{
                                return(<tr className='border-slate-200 border-b-[1px]'>
                                    <td className='text-center p-2'>
                                        {
                                            items.enrollment_number
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.student_name
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.course_name
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        ${
                                            items.fees
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.enrolled_date
                                        }

                                    </td>
                                  


                                </tr>)
                            })
                        }
                      
                        
                    </tbody>
                     </table>
                }
              
               
               </div>
            </div>
            <div className='p-2 mt-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-sans font-semibold text-[#83858b] text-xl'>BEST STUDENTS</h1>
                    <p className=' text-[#b33086]'>View All Students</p>
                </div>
                <div className='mt-4'>
                {
                    BestStudents.length<=0 && 
                    <Bars></Bars>
                }
                {
                    BestStudents.length > 0 && 

                    <table className='w-full bg-white table-auto'>
                    <thead className='border-slate-200 border-b-2 '>
                        <tr className='p-2'>
                            <th className='p-4'>
                                Reg.No
                            </th>
                            <th className='p-4'>
                                F.Name
                            </th>
                            <th className='p-4'>
                            L.Name
                            </th>
                            <th className='p-4'>
                               Course
                            </th>
                            <th className='p-4'>
                              Total Fees
                            </th>
                            <th className='p-4'>
                             Reg.Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            BestStudents.map((items,ind)=>{
                                return(<tr className='border-slate-200 border-b-[1px]'>
                                    <td className='text-center p-2'>
                                        {
                                            items.register_number
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.first_name
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.last_name
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.course
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        ${
                                            items.fees
                                        }

                                    </td>
                                    <td className='text-center p-2'>
                                        {
                                            items.registration_date
                                        }

                                    </td>
                                  


                                </tr>)
                            })
                        }
                      
                        
                    </tbody>
                     </table>
                }
              
               
               </div>

            </div>

        </div>
    </div>
  )
}

export default Home




