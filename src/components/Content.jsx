import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";

import { amethyst } from "@codesandbox/sandpack-themes";

const SandpackContent = () => {
    return (
       <div className="w-full border-b border-orange-900/40 bg-gradient-to-r from-[#1a0d05] via-[#140a04] to-[#1a0d05] backdrop-blur-xl">
        <SandpackProvider theme={amethyst} options={{
            autorun: true,
            
        }}>
            <SandpackLayout style={{
                width: "50%",
                margin: "auto"
            }}>
                <SandpackCodeEditor/>
                <SandpackPreview/>
            </SandpackLayout>
        </SandpackProvider>
       </div>
    )
}

export default SandpackContent;
