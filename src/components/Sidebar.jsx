import { Home, Search, LibraryBig, HandHeart } from 'lucide-react';

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
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
         <Home /> Home
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
          <Search /> Search
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
           <LibraryBig /> My Shelf
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
           <HandHeart /> Contribute
        </a>
      </nav>
    </div>

    
    <div class="space-y-2 text-xs text-gray-600 py-60">
      <a href="#" className="hover:text-orange-500 block">About</a>
      <a href="#" className="hover:text-orange-500 block">Support</a>
      <a href="#" className="hover:text-orange-500 block">Terms & Condition</a>
    </div>

  </aside>
)
}