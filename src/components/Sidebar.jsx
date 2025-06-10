import { Home, Search, LibraryBig, HandHeart } from 'lucide-react';
import { Link } from "react-router";

export default function Sidebar() {
return (
    
 
  <aside className="w-64 bg-white text-black flex flex-col justify-between py-8 px-6 rounded-tr-2xl rounded-br-2xl shadow-xl shadow-blue-300">
    <div>
      <div className="mb-10 text-left">
        <h1 className="text-xl leading-none italic tracking-wide">
          My <span className="text-[#F86F55] text-xl font-medium">Book</span><br />
          <span className="tracking-widest text-3xl">Shelf</span>
        </h1>
      </div>

      
      <nav className="space-y-6 text-sm font-bold text-gray-700">
        <Link to="#" className="flex items-center gap-3 hover:text-orange-500">
         <Home /> Home
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:text-orange-500">
          <Search /> Search
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:text-orange-500">
           <LibraryBig /> My Shelf
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:text-orange-500">
           <HandHeart /> Contribute
        </Link>
      </nav>
    </div>

    
    <div class="space-y-2 text-xs text-gray-600 py-60">
      <Link to="#" className="hover:text-orange-500 block">About</Link>
      <Link to="#" className="hover:text-orange-500 block">Support</Link>
      <Link to="#" className="hover:text-orange-500 block">Terms & Condition</Link>
    </div>

  </aside>
);
}