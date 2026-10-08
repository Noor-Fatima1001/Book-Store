import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"

const FreeBook = () => {
const [book,setBook] = useState([]);

  useEffect(()=>{
 const getBook = async() => {
  try{
   const res =await axios.get("http://localhost:3200/book");
   const data = res.data.filter((data)=> data.category==="Free");
   setBook(data)
  }
  catch(error){
    console.log("Error",error);
  }
 }
 getBook();
},[])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <>
     <div className='mx-w-screen-2xl mx-auto px-2 md:px-32'>
     <div>
        <h1 className='text-xl font-bold pb-2'>Free Offered Courses</h1>
        <p>Free course books provide quality learning material at no cost and are easily available online.
         They help students and learners gain knowledge, improve skills, and study at their own pace.
         These books make education accessible for everyone.</p>
     </div>
     <div>
        <Slider {...settings}>
        {book.map((item) =>(
        <Cards item={item} key={item.id}/>))}
        
      </Slider>
     </div>
      </div> 
    </>
  )
}

export default FreeBook
