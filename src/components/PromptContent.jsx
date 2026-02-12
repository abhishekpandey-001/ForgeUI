import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import Select from "react-select";
import { generateComponent } from "../services/generateComponent";
import { toast } from "react-toastify";

const options = [
  { value: "html-css", label: "HTML + CSS" },
  { value: "html-css-js", label: "HTML + CSS + JS" },
  { value: "react-tailwind", label: "React + Tailwind" },
];

const PromptContent = ({ setFiles, setTemplate }) => {
  const [framework, setFramework] = useState(options[2].value);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  //Handling ai data---->>>

  const handleGenerate = async () => {
    if (loading) return;

    if (!prompt.trim()) {
      toast.error("Please enter the prompt first");
      return;
    }

    setLoading(true);

    try {
      const code = await generateComponent(prompt, framework);
      if (framework === "react-tailwind") {
        setTemplate("react");
        setFiles({ "/App.js": code });
        setPrompt("");
      } else {
        setTemplate("static");
        setFiles({ "/index.html": code });
        setPrompt("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-semibold text-[#FF8A00]">Generate Your Coomponent</h3>
      <p className="text-[#A1A1A1] text-sm mt-1">
        Explain your component. AI handles the rest.
      </p>
      <p className="text-sm text-[#A1A1A1]">Select your framework</p>

      <Select
        className="mt-2"
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#0B0B0B",
            borderColor: state.isFocused
              ? "#FF8A00"
              : "rgba(255,255,255,0.05)",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#FF8A00",
            },
          }),

          menu: (base) => ({
            ...base,
            backgroundColor: "#141414",
          }),

          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
              ? "rgba(255,138,0,0.1)"
              : state.isSelected
                ? "#FF8A00"
                : "transparent",
            color: state.isSelected ? "black" : "white",
            cursor: "pointer",
          }),

          singleValue: (base) => ({
            ...base,
            color: "white",
          }),

          placeholder: (base) => ({
            ...base,
            color: "#A1A1A1",
          }),

          dropdownIndicator: (base) => ({
            ...base,
            color: "#A1A1A1",
            "&:hover": {
              color: "white",
            },
          }),

          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
        onChange={(option) => setFramework(option.value)}
        options={options}
        value={options.find((o) => o.value === framework)}
      />



      <p className="text-sm text-[#A1A1A1]">Describe your component</p>
      <textarea
        className="w-full bg-[#0B0B0B]
border border-white/5
focus:border-[#FF8A00]
focus:ring-1 focus:ring-[#FF8A00]/40
outline-none
p-4 resize-none rounded-xl
h-40 transition"
        placeholder="Enter your prompt here..."
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      ></textarea>
      <button
        className="flex items-center justify-center
bg-[#FF8A00]
hover:bg-[#E07800]
text-black
font-semibold
rounded-xl
px-5 py-2.5
ml-auto
gap-2
transition
active:scale-[0.97]
disabled:opacity-40"
        onClick={handleGenerate}
        disabled={loading}
      >
        {" "}
        <i>
          <BsStars />
        </i>{" "}
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};

export default PromptContent;
