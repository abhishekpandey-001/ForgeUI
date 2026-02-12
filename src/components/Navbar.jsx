import { useState } from "react";
import logos from "../assets/logos.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full 
border-b border-white/5 
bg-[#0B0B0B]/80 
backdrop-blur-xl">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-14 items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <img
              src={logos}
              alt="ForgeUI logo"
              className="h-8 w-8 object-contain"
            />

            <span className="text-lg sm:text-xl font-semibold tracking-tight text-white whitespace-nowrap">
              Forge<span className="text-[#FF8A00]">UI</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            
            <a className="text-sm text-[#A1A1A1] hover:text-white transition-colors">
              Docs
            </a>

            <a className="text-sm text-[#A1A1A1] hover:text-white transition-colors">
              GitHub
            </a>

            <button
              className="
                rounded-lg
                bg-[#FF8A00]
                px-4 py-1.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#E07800]
                active:scale-[0.98]
              "
            >
              Launch App
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0B0B0B]">
          <div className="flex flex-col gap-4 px-6 py-4">
            
            <a className="text-sm text-[#A1A1A1] hover:text-white">
              Docs
            </a>

            <a className="text-sm text-[#A1A1A1] hover:text-white">
              GitHub
            </a>

            <button className="rounded-lg bg-[#FF8A00] py-2 text-sm font-semibold text-white">
              Launch App
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
