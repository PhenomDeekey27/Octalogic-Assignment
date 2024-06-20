import React from 'react'
import { CiSearch } from "react-icons/ci";

const Courses = () => {
  return (
    <div className=' ml-[7rem] p-4'>
      <h1 className='text-4xl text-[#83858b] font-bold'>Courses</h1>
      <div className='flex items-center justify-between mt-4'>
        <h2 className='text-[#83858b] text-xl'>COURSE LIST</h2>
        <div className='relative flex items-center justify-center'>
          <input type="text" placeholder='Search here' className='border border-slate-300 rounded-lg placeholder:pl-[50px]' />
          <CiSearch className='absolute left-3 text-xl'></CiSearch>
        </div>
      </div>
        
    </div>
  )
}

export default Courses