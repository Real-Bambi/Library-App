import { useState } from "react";
import { Home, Search, LibraryBig, HandHeart, Menu, X } from 'lucide-react';
import { Link } from "react-router";
import Log2 from "../assets/images/log2.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
     
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#FBDB93] p-2 rounded shadow-lg"
      >
        {open ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
      </button>

      
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-[#FBDB93] shadow-xl shadow-blue-300 text-black flex flex-col justify-between py-8 px-6 w-64 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
       
        <div>
          <div className="mb-20 mt-10 text-left h-[80px] w-32">
            <img src={Log2} alt="logo" />
          </div>

          
          <nav className="space-y-6 text-sm font-bold text-gray-700">
            <Link to="/" className="flex items-center gap-3 hover:text-[#BE5B50]">
              <Home /> Home
            </Link>
            <Link to="#" className="flex items-center gap-3 hover:text-[#BE5B50]">
              <Search /> Search
            </Link>
            <Link to="/book-page" className="flex items-center gap-3 hover:text-[#BE5B50]">
              <LibraryBig /> My Shelf
            </Link>
            <Link to="/create-book" className="flex items-center gap-3 hover:text-[#BE5B50]">
              <HandHeart /> Add Book
            </Link>
          </nav>
        </div>

        
        <div className="space-y-2 text-sm text-gray-600">
          <Link to="#" className="text-[#641B2E] block">About</Link>
          <Link to="#" className="text-[#641B2E] block">Support</Link>
          <Link to="#" className="text-[#641B2E] block">Terms & Conditions</Link>
        </div>
      </aside>
    </>
  );
}