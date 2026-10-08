import React from 'react'
import FreeBook from '../../public/FreeBook.jpg'

const Cards = ({item}) => {
  return (
    <div className='my-3 p-3'>
      <div className=" bg-base-100 w-92 shadow-sm hover:scale-105 duration-200
       dark:border dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={FreeBook}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.Title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline rounded-full">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border border-gray-900
       hover:bg-pink-500 hover:text-white duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
