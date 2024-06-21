import React from 'react'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Courses from './Pages/Courses'
import Sidebar from './Components/Sidebar'


const App = () => {
  return (
    <div>
  
      <Routes>
        

        <Route  path="/" element={<Sidebar></Sidebar>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='courses' element={<Courses></Courses>}></Route>


        </Route>
     

      </Routes>
     
    </div>
  )
}

export default App