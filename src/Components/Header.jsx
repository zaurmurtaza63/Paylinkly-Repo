import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#0b2239]">Paylinkly</h1>

        {/* Desktop Nav */}
      <div className="flex gap-[30px]">
          <nav className="hidden md:flex items-center gap-[30px] text-[#555] font-semibold">
          <a href="#" className="hover:text-[#0b2239]">Home</a>
          <a href="#" className="hover:text-[#0b2239]">About</a>
          <a href="#" className="hover:text-[#0b2239]">Solutions</a>
        </nav>

        {/* Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2.5">
  <button className="white-btn hover:-translate-y-0.5 hover:shadow-md hover:cursor-pointer transition-all duration-300 text-blue-950 font-bold">
    Tired of Chargebacks?
  </button>
  <button className="blue-btn hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 text-white font-bold">
    Schedule Consultation
  </button>
</div>

      </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0b2239] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 gap-4 text-[#555]">
          <a href="#" className="hover:text-[#0b2239]" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="hover:text-[#0b2239]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" className="hover:text-[#0b2239]" onClick={() => setMenuOpen(false)}>Solutions</a>

          <button className="px-5 py-2 rounded-lg border border-[#E0E0E0] shadow-md bg-white hover:shadow-lg transition-all text-[#0b2239] font-medium w-[90%]">
            Tired of Chargebacks?
          </button>
          <button className="px-5 py-2 rounded-lg bg-gradient-to-bottom from-[#1A6DFF] to-[#0062FF] text-white font-semibold shadow-md hover:shadow-lg transition-all w-[90%]">
            Schedule Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
