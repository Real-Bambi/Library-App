export default function Navbar() {
    return (
        <nav className="flex justify-between">
          
    <div>
      <button class="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-full text-sm">
        All <i class="fa fa-chevron-down text-xs"></i>
      </button>
    </div>

   
    <div class="flex items-center bg-gray-100 px-3 py-2 rounded-full flex-grow max-w-md">
      <i class="fa fa-search text-gray-500"></i>
      <input type="text" placeholder="Search" class="bg-transparent outline-none px-2 w-full text-sm" />
      <i class="fa fa-sliders text-gray-500 ml-2"></i>
    </div>

  
    <div>
      <button class="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-full text-sm">
        <i class="fa fa-language text-red-400"></i> Lang <i class="fa fa-chevron-down text-xs"></i>
      </button>
    </div>

   
    <div class="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm">
      <i class="fa fa-clock text-red-400"></i>
      <span>09:00 AM</span>
    </div>

    
    <div class="bg-gray-100 px-3 py-2 rounded-full text-sm">
      4-Mar-2023
    </div>

    
    <div>
      <button class="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm">
        <img src="https://i.pravatar.cc/30?img=12" alt="User" class="h-6 w-6 rounded-full" />
        Kenson <i class="fa fa-chevron-down text-xs"></i>
      </button>
    </div>
        </nav>
    )
}