import logos from "../assets/logos.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-900/40 bg-gradient-to-r from-[#1a0d05] via-[#140a04] to-[#1a0d05] backdrop-blur-xl">
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logos}
            alt="ForgeUI logo"
            className="h-10 w-9 object-contain"
          />

          <span className="text-2xl font-semibold tracking-tight text-orange-50">
            Forge<span className="text-orange-500">UI</span>
          </span>
        </div>

        {/* RIGHT */}
        <nav className="flex items-center gap-7">
          
          <a className="text-sm text-orange-200/70 hover:text-orange-300 transition">
            Docs
          </a>

          <a className="text-sm text-orange-200/70 hover:text-orange-300 transition">
            GitHub
          </a>

          {/* CTA */}
          <button
            className="
              rounded-xl
              bg-orange-500
              px-5 py-2
              text-sm
              font-semibold
              text-white
              shadow-lg shadow-orange-600/30
              hover:bg-orange-400
              hover:shadow-orange-500/40
              transition-all
              hover:-translate-y-[1px]
            "
          >
            Launch App
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
