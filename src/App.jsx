import React from 'react'
import SearchBox from "./SearchBox";


const App = () => {
  return (
    <div className=" pattern-background w-full flex items-center justify-center p-6">
      <div className='flex flex-col items-center p-5 mx-auto 
bg-black/30
backdrop-blur-xl
border border-white/10
text-white
rounded-3xl
shadow-[0_20px_50px_rgba(0,0,0,0.35)]
 w-full max-w-[45%] min-w-[320px]'>
        <SearchBox />
        
      </div>



    </div>
  )
}

export default App