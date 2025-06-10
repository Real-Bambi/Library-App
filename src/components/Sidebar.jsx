import { Home, Search, LibraryBig, HandHeart } from 'lucide-react';

export default function Sidebar() {
return (
    
 
  <aside class="w-64 bg-white text-black flex flex-col justify-between py-8 px-6 rounded-tr-2xl rounded-br-2xl shadow-lg">
    <div>
      <div class="mb-10 text-left">
        <h1 class="text-xl leading-none italic tracking-wide">
          My <span class="text-[#F86F55] text-xl font-medium">Book</span><br />
          <span class="tracking-widest text-3xl">Shelf</span>
        </h1>
      </div>

      
      <nav class="space-y-6 text-sm text-gray-700">
        <a href="#" class="flex items-center gap-3 hover:text-orange-500">
         <Home /> Home
        </a>
        <a href="#" class="flex items-center gap-3 hover:text-orange-500">
          <Search /> Search
        </a>
        <a href="#" class="flex items-center gap-3 hover:text-orange-500">
           <LibraryBig /> My Shelf
        </a>
        <a href="#" class="flex items-center gap-3 hover:text-orange-500">
           <HandHeart /> Contribute
        </a>
      </nav>
    </div>

    
    <div class="space-y-2 text-xs text-gray-600 py-60">
      <a href="#" class="hover:text-orange-500 block">About</a>
      <a href="#" class="hover:text-orange-500 block">Support</a>
      <a href="#" class="hover:text-orange-500 block">Terms & Condition</a>
    </div>

  </aside>
)
}