import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

export async function generateComponent(prompt, framework) {
  try {
    if (!prompt || !framework) {
      throw new Error("Prompt and framework are required");
    }

    const frameworkInstruction =
      framework === "react-tailwind"
        ? "Return a complete App.js React component using Tailwind CSS."
        : "Return a single index.html file with HTML, CSS, and JavaScript.";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an experienced programmer with expertise in web development and UI/UX design. You create modern, animated and fully responsive UI components. You are highly skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js, Vue.js, Angular, and more.
    
    Now, generate a UI component for: ${prompt}
    Framework to use: ${frameworkInstruction}
    
    Requirements: 
    - The code must be clean, well-structured, and easy to understand.  
    - Optimize for SEO where applicable.  
    - Focus on creating a modern, animated, and responsive UI design.  
    - Include high-quality hover effects, shadows, animations, colors, and typography.  
    - Return ONLY executable code.
    -Do NOT wrap the response in triple backticks.
    -Do NOT include markdown.
    -Do NOT explain anything.
    -Do not import libraries unless specified.
    -Use CDN for HTML projects.`,
      config: {
        temperature: 0.2,
      },
    });
    return response.text?.trim() ?? "";
  } catch (error) {
    console.error("Gemini error:", error);
    throw error;
  }
}
