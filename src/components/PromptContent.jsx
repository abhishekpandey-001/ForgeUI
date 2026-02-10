import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const PromptContent = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='px-[1rem] mt-[0.5rem]'>
      <h3 className='text-3xl font-semibold'>Generate Your Coomponent</h3>
      <p className='text-[black] mt-2 text-[0.9rem]'>Explain your component. AI handles the rest.</p>
      <p className='text-md mt-2 font-[400]'>Select your framework</p>
      <Select className='mt-3'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <p className='text-[1.2rem] my-1.5'>Describe your component</p>
      <textarea className='w-full bg-black  resize-none rounded-xl h-[333px]'></textarea>
    </div>
  )
}

export default PromptContent
