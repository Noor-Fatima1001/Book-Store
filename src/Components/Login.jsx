import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
     const onSubmit = async(data) => {
       const  userInfo = {
        email:data.email,
        password:data.password
       }
      await axios.post("http://localhost:3200/User/login",userInfo)
       .then((res)=>{
        console.log(res.data);
        if(res.data){
        toast.success("Signup successfully");
        document.getElementById("my_modal_1").close();
        setTimeout(()=>{
        localStorage.setItem("Users",JSON.stringify(res.data.user));
        window.location.reload();
        },3000)
        
        }
          localStorage.setItem("Users",JSON.stringify(res.data.user));
       }).catch((error)=>{
        if(error.response){
          console.log(error)
        }
        toast.error("Error:"+error.response.data.message);
        setTimeout(()=>{},3000)
       })
    
      }

  return (
    <div>
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
     <Link to="/" className='absolute right-5 top-2 border-none'
     onClick={()=>document.getElementById("my_modal_1").close()}>
      X
     </Link>
      <h3 className="font-bold text-lg">Log in</h3>
    <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
        <input type='email' placeholder="Enter your Email" className='w-80 px-3 py-1 border
       border-gray-400 rounded-md outline-none'
       {...register("email", { required: true })} />
        <br/>
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
     <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
        <input type='text' placeholder="Enter your Password" className='w-80 px-3 py-1 border border-gray-400
        rounded-md outline-none' 
        {...register("password", { required: true })}/>
        <br/>
         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
      
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Login</button>
        <p>Not Registered?{" "}<Link to="/Signup" className='underline text-blue-600 cursor-pointer'>Signup</Link></p>
    </div>
    </form>
    
  </div>
</dialog>
    </div>
  )
}

export default Login
