import React, { useState } from 'react'
import SandpackContent from './SandpackContent'
import PromptContent from './PromptContent'

const Home = () => {


  const defaultCode = `export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center px-6">
      
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-120px] right-[-80px]" />

      {/* Card */}
      <div className="relative max-w-4xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-5xl font-semibold text-white leading-tight">
          Build beautiful components  
          <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            in seconds.
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl">
          Describe your UI, choose a framework, and watch production-ready code
          appear instantly. No setup. No boilerplate. Just creation.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition">
            Generate Component
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            See Demo
          </button>
        </div>

        {/* bottom badge */}
        <div className="mt-10 text-sm text-gray-400">
          ⚡ Powered by AI — React, Tailwind, HTML & more
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
          <PromptContent setFiles={setFiles} setTemplate={setTemplate} />
        </div>

        {/* For the right side code editor and preview */}
        <div className='w-[60%] rounded-2xl h-full bg-pink-500 h-[75vh]'><SandpackContent files={files} template={template} /></div>
      </div>
    </div>
  )
}

export default Home
