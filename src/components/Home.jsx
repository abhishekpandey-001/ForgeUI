import React, { useState } from 'react'
import SandpackContent from './SandpackContent'
import PromptContent from './PromptContent'

const Home = () => {


  const defaultCode = `export default function App() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}`

  const [files, setFiles] = useState({
    "/App.js": defaultCode
  });

  const [template, setTemplate] = useState("react");


  return (
    <div className='flex flex-col h-screen bg-black/80'>
      <div className='mt-5 bg-orange-200 text-center'><h1>Generate Beautiful Components</h1></div>
      <div className='flex justify-between mt-10 gap-[2rem] px-[3rem]'>
        {/* For left side Prompt */}
        <div className='bg-red-500 w-[40%] h-[75vh] rounded-2xl'>
          <PromptContent setFiles={setFiles} setTemplate = {setTemplate} />
        </div>

        {/* For the right side code editor and preview */}
        <div className='w-[60%] rounded-2xl h-full bg-pink-500 h-[75vh]'><SandpackContent files={files} template={template} /></div>
      </div>
    </div>
  )
}

export default Home
