import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";
import Modifycourse from '../Components/Modifycourse';


import 'react-toastify/dist/ReactToastify.css';
const Courses = () => {
const [CourseData, setCourseData] = useState([])
const [AddCourseVisible, setAddCourseVisible] = useState(false)
const [toggleEdit, settoggleEdit] = useState(false)
const [ind, setind] = useState("")
const [modifyCourseToggler, setmodifyCourseToggler] = useState(false)
const [ArchieveToggler, setArchieveToggler] = useState(false)
const initialValues={
  course_name:"",
  description:"",
  instructor_name:"",
  instrument_name:"",
  day_of_week:"",
  price:"",
  status:"active"
}
const [values, setvalues] = useState(initialValues)
const handleInputChange=(e)=>{
  const{name,value}=e.target;
  
  setvalues({
    ...values,
    [name]:value
  })
}
const getCourseDetails=async()=>{
  

  const CourseDetails=JSON.parse(localStorage.getItem("courses"))

 
  if(!CourseDetails){
    const courses=await axios.get("CourseData.json")
    setCourseData(courses.data)

    localStorage.setItem("courses",JSON.stringify(courses.data))

  }else{
    setCourseData(CourseDetails)

  }
  

 
 
  
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

const AddcourseToggler=()=>{
  setAddCourseVisible(!AddCourseVisible)
  const table=document.getElementById("course_table")
  table.style.opacity="0.3"
  window.scrollTo({
    top:"1rem",
    behavior:"smooth"
  })
  
}
const CancelcourseToggler=()=>{
  setAddCourseVisible(!AddCourseVisible)
  const table=document.getElementById("course_table")
  table.style.opacity="1"
 
  
}

const AddnewCourse=()=>{
 
  CourseData.push(values)

 
  localStorage.setItem("courses",JSON.stringify(CourseData))
  toast.success("Course Added Successfully")
  setAddCourseVisible(!AddCourseVisible)
  const table=document.getElementById("course_table")

  table.style.opacity="1"
    console.log(JSON.parse(localStorage.getItem("courses").length))
  
}

const EditCourse=(ind,status)=>{
  console.log(status)
  const table=document.getElementById("course_table")

  table.style.opacity="0.3"
 
  setind(ind)
 
  if(status==="closed"){
    toast.error("Course is Not Active")
  }
  if(status=="active"){
    settoggleEdit(!toggleEdit)
    window.scrollTo({
      top:"2rem",
      behavior:"smooth"
    })

  
  }
  if(status=="archived"){
      setArchieveToggler(!ArchieveToggler)
      window.scrollTo({
        top:"3rem",
        behavior:"smooth"
      })
      settoggleEdit(false)
  }






}

const CloseCourse=()=>{
  let olddata=CourseData;
  
  olddata[ind].status="closed"
  console.log(olddata)
  setCourseData(olddata)
  localStorage.setItem("courses",JSON.stringify(CourseData))
  const table=document.getElementById("course_table")

  table.style.opacity="1"
   settoggleEdit(!toggleEdit)

}

const ArchieveCourse=()=>{
  let olddata=CourseData;
  
  olddata[ind].status="archived"
  
  setCourseData(olddata)
  localStorage.setItem("courses",JSON.stringify(CourseData))
  const table=document.getElementById("course_table")

  table.style.opacity="1"
   settoggleEdit(!toggleEdit)

}
const UnarchieveCourse=()=>{
  console.log(toggleEdit)
  let olddata=CourseData;
  
  olddata[ind].status="active"
  
  setCourseData(olddata)
  localStorage.setItem("courses",JSON.stringify(CourseData))
  const table=document.getElementById("course_table")

  table.style.opacity="1"
   settoggleEdit(!toggleEdit)
   setArchieveToggler(!ArchieveToggler)

}

  return (
    
    <div className=' ml-[7rem] p-4 bg-[#f4f4f4] relative mb-4'>
      <ToastContainer></ToastContainer>
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
                      return(<tr className='border-slate-200 border-b-[1px]' key={ind}>
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
                                  items.number_of_students ? items.number_of_students : 0
                              }

                          </td>
                          <td className='text-center p-2'>
                              ${
                                  items.price
                              }

                          </td>
                          <td className={`text-center `}>
                              <button className={`${items.status=="active" ? "bg-green-300":items.status=="closed" ? "bg-red-300":"bg-slate-300"} p-2 rounded-md capitalize`}>
                              {
                                  items.status
                              }
                              </button>

                          </td>
                          <td className='text-center p-8 relative'>
                            <BsThreeDotsVertical className={`${items.status=="closed" ? "text-slate-400":"text-black"} cursor-pointer`} onClick={()=>EditCourse(ind,items.status)}></BsThreeDotsVertical>
                            
                          


                          </td>
                        


                      </tr>)
                  })
              }
            
              
          </tbody>
           </table>

        }

      </div>

     <div className='bg-red-400 p-4 w-42 rounded-lg absolute right-5 mt-4 mb-12 cursor-pointer' onClick={()=>AddcourseToggler()}>
      <div className='flex items-center gap-2'>
        <FaPlus></FaPlus>
        <span className='text-nowrap'>Add Course</span>

      </div>

     

     
     </div>
     {
      AddCourseVisible && 
      <div className='mt-20 container-sm bg-white p-2 absolute w-[80%] flex items-center flex-col top-[5rem] justify-center'>
      <h1 className='text-3xl'>Add Course</h1>
      <form className='flex flex-col gap-2 rounded-sm mt-2 w-full'>
     
        <input type="text" placeholder='Course Name' className='border-slate-300 rounded-lg' name='course_name' onChange={handleInputChange} value={values.course_name}   />
        <input type="text" placeholder='Description' className='border-slate-300 rounded-lg' name='description' onChange={(e)=>handleInputChange(e)} value={values.description} />
        <input type="text" placeholder='Instructor' className='border-slate-300 rounded-lg' name='instructor_name' onChange={(e)=>handleInputChange(e)} value={values.instructor_name}/>
        <input type="text" placeholder='Instrument' className='border-slate-300 rounded-lg' name='instrument_name' onChange={(e)=>handleInputChange(e)} value={values.instrument_name}/>
        <select name="day_of_week" onChange={(e)=>handleInputChange(e)} value={values.day_of_week}>
          <option value="Day of Week" disabled>Day of Week</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Satruday">Satruday</option>
          <option value="Sunday">Sunday</option>
        </select>
     
        <input type="number" placeholder='Price'  className='border-slate-300 rounded-lg' name='price' onChange={(e)=>handleInputChange(e)} value={values.price} />
      </form>
      <div className='p-2 flex gap-6 items-end justify-end'>
        <button className='p-2 bg-slate-200' onClick={()=>CancelcourseToggler()}>Cancel</button>
        <button className='p-2 bg-red-300 rounded-lg' onClick={()=>AddnewCourse()}>Add Course</button>
      </div>
    </div>
      

     }

  {
    toggleEdit &&
    <div className='bg-white p-8 absolute left-[40%] top-32'>
    <div className='p-4'>
      <IoClose className='text-2xl absolute top-0 right-0 cursor-pointer' onClick={()=>{
        settoggleEdit(!toggleEdit)
        const table=document.getElementById("course_table")

        table.style.opacity="1"

        
        }}></IoClose>
    </div>
    <div className='flex flex-col gap-8'>
    <p className='cursor-pointer' onClick={()=>{
      setmodifyCourseToggler(!modifyCourseToggler)
      const table=document.getElementById("course_table")

      settoggleEdit(!toggleEdit)

      }}>Edit Course</p>
    <p onClick={()=>CloseCourse(ind)} className='cursor-pointer'>Close Course</p>
    <p className='cursor-pointer' onClick={()=>{ArchieveCourse(ind)}}>Archieve Course</p>

    </div>



</div>
  }


   
    
  

   {
    modifyCourseToggler  && <Modifycourse Course={CourseData[ind]} setmodifyCourseToggler={setmodifyCourseToggler} modifyCourseToggler={modifyCourseToggler} CourseData={CourseData} ind={ind} setCourseData={setCourseData}></Modifycourse>
   }
{
  ArchieveToggler &&
  <div className='bg-white p-8 absolute top-[8rem] left-[40%] cursor-pointer' onClick={()=>UnarchieveCourse()}>
    <p>Unarchieve</p>
   </div>
}
   

        
    </div>
  )
}

export default Courses