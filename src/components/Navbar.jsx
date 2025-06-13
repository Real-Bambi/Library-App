import React, { useState } from 'react';
import { LibraryBig, Search, User, Menu, X } from 'lucide-react';
import { Link } from "react-router";

export default function LibraryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#BE5B50] sticky top-0 z-50 shadow-md px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

    
        <div className="hidden md:flex items-center gap-8 text-gray-900 font-bold">
          <select
            name="category"
            className="bg-transparent text-gray-900 border-none outline-none text-sm cursor-pointer"
            defaultValue=""
          >
            <option disabled value="">Categories</option>
            <option>Fiction</option>
            <option>History</option>
            <option>Science</option>
            <option>Romance</option>
            <option>Fantasy</option>
            <option>Programming</option>
          </select>
        </div>

     
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center px-2 py-1">
            <input
              type="text"
              placeholder="Search books..."
              className="bg-transparent text-sm text-gray-900 focus:outline-none w-40 md:w-64"
            />
            <Search className="w-5 h-5 text-gray-900 hover:text-[#FBDB93] cursor-pointer" />
          </div>

          <Link to="/login">
            <button className="p-2 px-4 rounded-lg bg-[#FBDB93] text-black font-bold transition">LOGIN</button>
          </Link>

          <User className="w-5 h-5 text-gray-900 hover:text-[#FBDB93] cursor-pointer" />
        </div>

        
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-4 text-white px-2 font-bold">
          <select
            name="category"
            className="bg-[#FBDB93] text-black p-2 rounded w-full"
            defaultValue=""
          >
            <option disabled value="">Categories</option>
            <option>Fiction</option>
            <option>History</option>
            <option>Science</option>
            <option>Romance</option>
            <option>Fantasy</option>
            <option>Programming</option>
          </select>

          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-[#FBDB93]">Home</Link>
            <Link to="/create-book" className="hover:text-[#FBDB93]">Add Book</Link>
            <Link to="/view-book" className="hover:text-[#FBDB93]">View Book</Link>
          </div>
        </div>
      )}
    </nav>
  );
}