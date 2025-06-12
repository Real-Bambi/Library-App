import { Home, Search, LibraryBig, HandHeart } from 'lucide-react';
import { Link } from "react-router";

export default function Sidebar() {
return (
    
 
  <aside className="w-64 h-screen bg-[#FBDB93] text-black flex flex-col justify-between py-8 px-6 shadow-xl shadow-blue-300">
    <div>
      <div className="mb-10 text-left">
        <h1 className="text-xl leading-none italic tracking-wide">
          My <span className="text-[#BE5B50] text-xl font-medium">Book</span><br />
          <span className="tracking-widest text-3xl">Shelf</span>
        </h1>
      </div>

      
      <nav className="space-y-6 text-sm font-bold text-gray-700">
        <Link to="/" className="flex items-center gap-3 hover:text-[#BE5B50]">
         <Home /> Home
        </Link>
        <Link to="/not-found" className="flex items-center gap-3 hover:text-[#BE5B50]">
          <Search /> Search
        </Link>
        <Link to="/book-page" className="flex items-center gap-3 hover:text-[#BE5B50]">
           <LibraryBig /> My Shelf
        </Link>
        <Link to="/create-book" className="flex items-center gap-3 hover:text-[#BE5B50]">
           <HandHeart /> Contribute
        </Link>
      </nav>
    </div>

    
    <div class="space-y-2 text-sm text-gray-600 py-30">
      <Link to="#" className="text-[#641B2E] block">About</Link>
      <Link to="#" className="text-[#641B2E] block">Support</Link>
      <Link to="#" className="text-[#641B2E] block">Terms & Condition</Link>
    </div>

  </aside>
);
}