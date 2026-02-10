import React from 'react'
import SandpackContent from './SandpackContent'

const Home = () => {
  return (
    <div className='flex flex-col h-screen bg-black/80'>
      <div className='mt-10 bg-orange-200 text-center'><h1>Generate Beautiful Components</h1></div>
      <div className='flex justify-around h-[70%] mt-10'>
        {/* For left side Prompt */}
        <div className='bg-red-500 w-[40%] rounded-2xl'>This is the prompt side</div>
        {/* For the right side code editor and preview */}
        <div className='w-[50%] rounded-2xl h-full bg-black'><SandpackContent/></div>
      </div>
    </div>
  )
}

export default Home
