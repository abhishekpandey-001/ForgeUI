import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'

import { amethyst } from '@codesandbox/sandpack-themes'

const SandpackContent = () => {

  const [preview, setPreview] = useState("code")
  return (
    <div>
      <div className='flex gap-5'>
        {["code", "preview"].map((btn) => (
          <button
            key={btn}
            onClick={() => setPreview(btn)}
            className="text-white mb-2 ml-3"
          >
            {btn}
          </button>
        ))}
      </div>
      <SandpackProvider theme={amethyst} options={{
        autorun: true,
      }}>
        <SandpackLayout>
          <div className={preview === "code" ? "block w-full" : "hidden"}>
            <SandpackCodeEditor showLineNumbers showTabs wrapContent style={{
              height: 480,
            }} />
          </div>

          <div className={preview === "preview" ? "block w-full" : "hidden"}>
            <SandpackPreview className='rounded-2xl' style={{
              height: 480,
            }} />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default SandpackContent