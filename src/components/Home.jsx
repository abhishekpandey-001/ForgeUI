import React from 'react'
import SandpackContent from './SandpackContent'
import PromptContent from './PromptContent'

const Home = () => {
  return (
    <div className='flex flex-col h-screen bg-black/80'>
      <div className='mt-5 bg-orange-200 text-center'><h1>Generate Beautiful Components</h1></div>
      <div className='flex justify-between mt-10 gap-[2rem] px-[3rem]'>
        {/* For left side Prompt */}
        <div className='bg-red-500 w-[50%] h-[75vh] rounded-2xl'>
            <PromptContent/>
        </div>

        {/* For the right side code editor and preview */}
        <div className='w-[50%] rounded-2xl h-full bg-pink-500 h-[75vh]'><SandpackContent/></div>
      </div>
    </div>
  )
}

export default Home
