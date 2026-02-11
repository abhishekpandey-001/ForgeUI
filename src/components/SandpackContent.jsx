import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'
import { Copy } from "lucide-react";
import { toast } from 'react-toastify';
import { CiExport } from "react-icons/ci";

import { amethyst, ecoLight } from '@codesandbox/sandpack-themes'

const SandpackContent = ({ files, template }) => {

  const [preview, setPreview] = useState("preview")
  const [copied, setCopied] = useState(false);

  //LLogic to copy the code
  const handleCopy = async () => {
    try {
      const generatedCode = Object.values(files)[0];
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      toast.success("Code copied successfully")
    } catch {
      toast.error("Failed to copy")
    }
  };


  //Logic to download the file

  const downloadFile = () => {

    const filePath = Object.keys(files)[0];
    const code = files[filePath];

    const extension = filePath.includes(".html") ? "html" : "js";
    const fileName = `ForgeUI-code.${extension}`;

    const blob = new Blob([code], { type: "text/plain" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);

    toast.success("File downloaded 🚀");
  };

  return (
    <div className='px-[1rem] mt-[0.5rem]'>
      <div className='flex gap-5'>
        {["code", "preview"].map((btn) => (
          <button
            key={btn}
            onClick={() => setPreview(btn)}
            className="text-white mb-[1rem] ml-3"
          >
            {btn}
          </button>
        ))}

        <button className="group p-2 rounded-lg hover:bg-gray-200 transition-all" onClick={handleCopy}>
          <Copy
            size={18}
            className={`transition-all duration-200 
            ${copied ? "scale-125 text-green-500" : "group-hover:scale-125"}`}
          />
        </button>

        <button onClick={downloadFile}
          className="group p-2 rounded-lg hover:bg-gray-200 transition-all">
          <CiExport className="group-hover:scale-125 transition-all"/>
        </button>


      </div>
      <SandpackProvider theme={ecoLight} options={{
        autorun: true,
        externalResources: ["https://cdn.tailwindcss.com"],
        recompileMode: 'immediate'
      }}
        template={template} files={files}>
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