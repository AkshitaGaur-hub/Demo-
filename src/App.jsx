import React from 'react'
import SearchBox from './searchBox'

const App = () => {
  return (
    <>
      <div className='flex flex-col rounded-xl items-center m-20 p-5 mx-auto bg-teal-100 w-[45%]'>
      <SearchBox/>
        <button 
          type="button" 
          className="m-3 text-white rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-600 font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Search
        </button>
      </div>
    </>
  )
}

export default App