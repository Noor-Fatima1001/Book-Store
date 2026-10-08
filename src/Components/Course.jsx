import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import { Link } from 'react-router-dom'
import axios from "axios"

const Course = () => {
const [book,setBook] = useState([]);

useEffect(()=>{
 const getBook = async() => {
  try{
   const res =await axios.get("http://localhost:3200/book")
   setBook(res.data)
  }
  catch(error){
    console.log("Error",error);
  }
 }
 getBook();
},[])
  return (
    <div className='mx-w-screen-2xl mx-auto px-2 md:px-32'>
      <div className='mt-28 justify-center items-center text-center'>
        <h1 className='font-semibold text-2xl md:text-4xl'>
          We're delighted to have you{" "}<span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='my-12'>Books are quiet powerhouses: they sit still on shelves, yet inside them whole
          worlds are waiting to unfold. A single book can teach you something practical, challenge the way you think,
          or let you live another life for a few hours, all without asking for anything more than your
          attention. They slow time in a way few other things do, inviting patience, imagination, and 
          reflection in a fast, noisy world. Whether it’s a dog-eared novel, a heavy history tome, or a 
          slim book of poems, books have a knack for meeting readers exactly where they are—and sometimes
          gently nudging them somewhere new.</p>
          <Link to="/" className='bg-pink-500 text-white hover:bg-pink-800 px-4 py-2 rounded-md
           duration-200'>Back</Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=> (
            <Cards item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Course
