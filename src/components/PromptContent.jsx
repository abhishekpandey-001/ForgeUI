import React, { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import Select from 'react-select';
import { generateComponent } from '../services/generateComponent';
import { toast } from 'react-toastify';

const options = [
  { value: 'html-css', label: 'HTML + CSS' },
  { value: 'html-css-js', label: 'HTML + CSS + JS' },
  { value: 'react-tailwind', label: 'React + Tailwind' },
];

const PromptContent = ({ setFiles, setTemplate }) => {

  const [framework, setFramework] = useState(options[2].value)
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  //Handling ai data---->>>

  const handleGenerate = async () => {

    if (loading) return;

    if (!prompt.trim()) {
      toast.error("Please enter the prompt first")
      return;
    }

    setLoading(true);

    try {
      const code = await generateComponent(prompt, framework);
      if (framework === "react-tailwind") {
        setTemplate("react");
        setFiles({ "/App.js": code });
        setPrompt("")
      } else {
        setTemplate("static");
        setFiles({ "/index.html": code });
        setPrompt("")
      }

    } catch (error) {
      console.error(error)
     toast.error(error)
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <div className='px-[1rem] mt-[0.5rem]'>
      <h3 className='text-3xl font-semibold'>Generate Your Coomponent</h3>
      <p className='text-[black] mt-2 text-[0.9rem]'>Explain your component. AI handles the rest.</p>
      <p className='text-md mt-2 font-[400]'>Select your framework</p>
      <Select className='mt-3'
        onChange={(option) => setFramework(option.value)}
        options={options}
        value={options.find(o => o.value === framework)}
      />
      <p className='text-[1.2rem] my-1.5'>Describe your component</p>
      <textarea className='w-full bg-black text-white p-4 resize-none rounded-xl h-[28vh]' placeholder='Enter your prompt here...'
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      ></textarea>
      <button className='flex items-center p-3 ml-auto mt-2 rounded-lg border-0 bg-purple-700 min-w-[120px] gap-1 text-md px-[20px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' onClick={handleGenerate} disabled={loading}> <i><BsStars /></i> {loading ? "Generating..." : "Generate"}</button>
    </div>
  )
}

export default PromptContent
