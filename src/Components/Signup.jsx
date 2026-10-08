import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Signup = () => {

const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

 const onSubmit = async (data) => {
  try {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    const res = await axios.post(
      "http://localhost:3200/User/signup",
      userInfo
    );

    toast.success("Signup successfully");
    navigate(from ,{replace:true});
    localStorage.setItem("Users", JSON.stringify(res.data.user));
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Signup failed");
  }
};

  
  return (
    <div className='flex items-center justify-center h-screen'>
     <div id="my_modal_1"  >
    <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] border border-gray-200 shadow-md p-5 rounded-md">
    <div className='flex justify-between items-center'>
    <h3 className="font-bold text-lg">Sign up</h3>
    <Link to="/" className='text-gray-900'>X</Link>
    </div>
    <div className='mt-4 space-y-2'>
    <div className='mt-4 space-y-2'>
    <span>Name</span>
    <br/>
        <input type='text' placeholder="Enter your Name" className='w-80 px-3 py-1 border border-gray-400
        rounded-md outline-none' {...register("fullname", { required: true })}/>
        <br/>{errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
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
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Sign up</button>
        <p>Have an Account?{" "}<Link to="/" className='underline text-blue-600 cursor-pointer'>Login
        </Link></p>
    </div>
  </form>
</div>
    </div>
  )
}

export default Signup
