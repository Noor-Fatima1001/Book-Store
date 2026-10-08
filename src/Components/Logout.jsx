import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
const { authUser, setAuthUser } = useAuth();

const handelLogout=()=>{
try{
setAuthUser({
    ...authUser,
    user:null
})
localStorage.removeItem("Users")
toast.success("Logout Successfully");
 document.getElementById("my_modal_1").close();
        setTimeout(()=>{
        window.location.reload();
        },3000)
}
catch(error){
    toast.error("Error",error.message);
            setTimeout(()=>{},2000)
}
}
  return (
    <div>
      <button onClick={handelLogout} className='px-3 py-2 cursor-pointer bg-red-500 text-white rounded-md'>Logout</button>
    </div>
  )
}

export default Logout
