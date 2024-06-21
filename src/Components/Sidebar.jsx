import React from 'react'
import LogoImg from "../Assests/Logo.png"
import HomeImg from "../Assests/Home.png"
import CourseImg from "../Assests/Course.png"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div>
        <div id="sidebar" className='w-28 flex flex-col items-center gap-6 bg-white h-[100vh] fixed'>
            <div className='mt-4'>
              <Link to="/">
              <img src={LogoImg} alt="" />
              </Link>
           

            </div>
            <div className='flex gap-6 flex-col'>
              <Link to={"/"}>
              <img src={HomeImg} alt="" />
              </Link>
              <Link to={"/courses"}>
              <img src={CourseImg} alt="" />
              </Link>
           
            

            </div>
            
          
           

        </div>
        <Outlet></Outlet>

      </div>
    
  )
}

export default Sidebar