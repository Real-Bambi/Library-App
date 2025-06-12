import React, { useState } from 'react';
import { LibraryBig, Search, User, Menu, X, Plus, View } from 'lucide-react';
import { Link } from "react-router";

export default function LibraryNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-[#BE5B50] shadow-md px-6 py-4 h-18  mt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="hidden md:flex items-center gap-8 text-gray-900">
                    

                    <Link to="#" className="hover:text-[#FBDB93]">
                        <select name="" id="" className='border-none outline-none'><option className='text-gray-900' disabled selected>Categories</option>
                            <option className='text-gray-900' value="">Fiction</option>
                            <option className='text-gray-900' value="">History</option>
                            <option className='text-gray-900' value="">Science</option>
                            <option className='text-gray-900' value="">Romance</option>
                            <option className='text-gray-900' value="">Fantasy</option>
                            <option className='text-gray-900' value="">Programming</option>
                        </select>
                    </Link>

                </div>


                <div className="hidden md:flex items-center gap-6">
                    <div className='flex'><input type="text" placeholder="Search books..." className="bg-transparent focus:outline-none w-full md:w-64 text-sm" />
                        <Search className="w-5 h-5 text-gray-900 hover:text-[#FBDB93] cursor-pointer" />
                        
                    </div>

                    <button className='p-2 rounded-[10px] bg-[#FBDB93] font-bold ml-10'><a href="#">LOGIN</a></button>
                    <User className="w-5 h-5 text-gray-900 hover:text-[#FBDB93] cursor-pointer" />
                </div>


                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


            {
                mobileOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-900">
                        <Link to="#" className="hover:text-[#FBDB93]">Categories</Link>
                        <Link to="#" className="hover:text-[#FBDB93]">LOGIN</Link>
                    </div>
                )
            }
        </nav >
    );
}