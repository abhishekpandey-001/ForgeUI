import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'
import { Copy, Download } from "lucide-react";
import { toast } from 'react-toastify';


const SandpackContent = ({ files, template }) => {

  const [preview, setPreview] = useState("preview")
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

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

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 1500);

    toast.success("File downloaded 🚀");
  };

  return (
    <div className='space-y-4'>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">

        {/* LEFT SIDE - Tabs */}
        <div className="flex items-center gap-3">
          {["code", "preview"].map((btn) => (
            <button
              key={btn}
              onClick={() => setPreview(btn)}
              className={`
          px-3 py-1.5 rounded-lg text-sm capitalize transition
          ${preview === btn
                  ? "bg-[#FF8A00] text-black font-medium"
                  : "text-[#A1A1A1] hover:text-white hover:bg-white/5"}
        `}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE - Actions */}
        <div className="flex items-center gap-2">
          <button
            className="group p-2 rounded-lg hover:bg-white/5 transition-all"
            onClick={handleCopy}
          >
            <Copy
              size={18}
              className={`text-[#A1A1A1] transition-all duration-200
        ${copied
                  ? "scale-125 text-green-500"
                  : "group-hover:scale-125 group-hover:text-white"}`}
            />
          </button>

          <button
            onClick={downloadFile}
            className="group p-2 rounded-lg hover:bg-white/5 transition-all"
          >
            <Download
              size={18}
              className={`text-[#A1A1A1] transition-all duration-200
        ${downloaded
                  ? "scale-125 text-green-500"
                  : "group-hover:scale-125 group-hover:text-white"}`}
            />
          </button>
        </div>

      </div>
      <SandpackProvider theme={'dark'} options={{
        autorun: true,
        externalResources: ["https://cdn.tailwindcss.com"],
        recompileMode: 'immediate'
      }}
        template={template} files={files}>
        <SandpackLayout className="overflow-hidden">
          <div className="relative w-full h-[418px]">

            <div
              className={`absolute inset-0 ${preview === "code" ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-opacity duration-150`}
            >
              <SandpackCodeEditor
                showLineNumbers
                showTabs
                wrapContent
                className="h-full"
              />
            </div>

            <div
              className={`absolute inset-0 ${preview === "preview" ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-opacity duration-150`}
            >
              <SandpackPreview
                className="h-full rounded-lg overflow-hidden bg-[#0B0B0B]"
              />
            </div>

          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default SandpackContent