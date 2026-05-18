import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <div className='search bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-4 relative'>
        <input type='text' className='w-full h-full outline-none border-0'  placeholder='Search for products...'/>
        <button className='w-4 h-4 rounded-full  absolute  -bottom-[-15px] text-center right-0 z-50 flex items-center justify-center cusrsor-pointer hover:bg-gray-50'>
        <IoSearch size={25} />
        </button>
      </div>
    </div>
  )
}

export default Search
