import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Modifycourse = ({Course,modifyCourseToggler,setmodifyCourseToggler,CourseData,ind,setCourseData}) => {
    
    const initialValues={
        course_name:Course.course_name,
        description:Course.description,
        instructor_name:Course.instructor_name,
        instrument_name:Course.instrument_name,
        day_of_week:Course.day_of_week,
        price:Course.price,
        status:Course.status
      }
      const [values, setvalues] = useState(initialValues)
      const handleInputChange=(e)=>{
        const{name,value}=e.target;
        
        setvalues({
          ...values,
          [name]:value
        })
      }

      const editCourse=()=>{
        let oldData=CourseData;
        oldData[ind]=values;
        setCourseData(oldData)
        localStorage.setItem("courses",JSON.stringify(CourseData))
        setmodifyCourseToggler(!modifyCourseToggler)
        const table=document.getElementById("course_table")
        table.style.opacity=1
        toast.success("Course Modified Successfully")


       
      }
  return (
    <div className='absolute top-40 w-full bg-white p-4'>
          <h1 className='text-3xl'>Edit Course</h1>
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
        <button className='p-2 bg-slate-200' onClick={()=>{
            setmodifyCourseToggler(!modifyCourseToggler)
            const table=document.getElementById("course_table")
            table.style.opacity=1

            }}>Cancel</button>
        <button className='p-2 bg-red-300 rounded-lg' onClick={()=>editCourse()}>Edit Course</button>
      </div>

    </div>
  )
}

export default Modifycourse