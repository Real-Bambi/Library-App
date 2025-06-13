import { Home, Search, LibraryBig, HandHeart } from 'lucide-react';
import { Link } from "react-router";
import Log2 from "../assets/images/log2.png"

export default function Sidebar() {
return (
    
 
  <aside className="w-50 h-screen fixed bg-[#FBDB93] text-black flex flex-col justify-between py-8 px-6 shadow-xl shadow-blue-300  " >
    <div>
      <div className="mb-20 text-left h-[80px] w-32">
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
    <div className="space-y-2 text-sm text-gray-600 py-30">
      <Link to="#" className="text-[#641B2E] block">About</Link>
      <Link to="#" className="text-[#641B2E] block">Support</Link>
      <Link to="#" className="text-[#641B2E] block">Terms & Condition</Link>
    </div>
  </aside>
);
}