import React, { useState } from 'react'
import SandpackContent from './SandpackContent'
import PromptContent from './PromptContent'
import { LuWand } from "react-icons/lu";

const Home = () => {


  const defaultCode = `export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-[#FFFFFF] overflow-hidden flex items-center justify-center">

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FF8A0015,transparent_65%)] pointer-events-none" />

      <div className="relative w-full max-w-3xl px-4 sm:px-8 py-12 text-center">

        <h1 className="font-semibold leading-tight text-[clamp(16px,6vw,34px)]">
          Build beautiful components
          <span className="block text-[#FF8A00]">
            in seconds.
          </span>
        </h1>

        <p className="mt-5 mx-auto max-w-xl text-[#A1A1A1] text-[clamp(12px,3.5vw,16px)]">
          Describe your UI, choose a framework, and instantly get clean,
          production-ready code.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <button className="
            rounded-lg 
            bg-[#FF8A00] 
            text-black 
            font-medium 
            transition 
            hover:opacity-90
            px-[clamp(8px,3vw,24px)]
            py-[clamp(6px,2vw,12px)]
            text-[clamp(10px,3vw,14px)]
          ">
            Generate
          </button>

          <button className="
            rounded-lg 
            border 
            border-white/10 
            text-white 
            transition 
            hover:bg-white/5
            px-[clamp(8px,3vw,24px)]
            py-[clamp(6px,2vw,12px)]
            text-[clamp(10px,3vw,14px)]
          ">
            See Demo
          </button>

        </div>

        <div className="mt-8 text-[#A1A1A1] text-[clamp(10px,2.5vw,13px)]">
          ⚡ Powered by AI — React & Tailwind
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
    <div className='min-h-screen bg-[#0B0B0B] text-white'>
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-center">
        <h1 className="text-[clamp(18px,3vw,24px)] font-semibold tracking-tight flex items-center justify-center gap-2">
          <span className="text-white">Generate</span>
          <span className="text-[#FF8A00]">Beautiful</span>
          <span className="text-white">Components</span>
          <LuWand className="text-[#FF8A00] text-[clamp(16px,2.5vw,22px)]" />
        </h1>
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8
                grid grid-cols-1 lg:grid-cols-5 gap-6'>
        {/* For left side Prompt */}
        <div className='lg:col-span-2 bg-[#141414] 
                border border-white/5 
                rounded-xl p-5'>
          <PromptContent setFiles={setFiles} setTemplate={setTemplate} />
        </div>

        {/* For the right side code editor and preview */}
        <div className='lg:col-span-3 bg-[#141414] 
                border border-white/5 
                rounded-xl p-5'><SandpackContent files={files} template={template} /></div>
      </div>
    </div>
  )
}

export default Home
