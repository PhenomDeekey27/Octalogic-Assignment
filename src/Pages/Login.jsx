import React from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const [Email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const Login=()=>{
        if(!Email){
            toast.error('Email Required')
        }
        if(password!==cpassword){
            toast.error("password needs to be same")
        }
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Confirm your password' onChange={(e)=>setEmail(e.target.value)}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login