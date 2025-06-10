import { } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex justify-between">



            <select name="type" id="type" className=" flex items-center border-none shadow-lg bg-gray-100 rounded-full">
                <option selected disabled>Categories</option>
                <option value="drama">Fiction</option>
                <option value="drama">Horror</option>
                <option value="drama">Non Fiction</option>
                <option value="drama">Drama</option>

            </select>
            <div><input type="text" placeholder="Search" class="bg-white outline-none px-2 w-full text-sm" /></div>
            <i class="fa fa-sliders text-gray-500 ml-2"></i>




            <div class="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm">
                <i class="fa fa-clock text-red-400"></i>
                <input type="time" placeholder='09:00 AM' />
            </div>


            <div class="bg-gray-100 px-3 py-2 rounded-full text-sm">
                <input type="date" name="" id="" />
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