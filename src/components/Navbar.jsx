import React, { useState } from 'react';
import { LibraryBig, Search, User, Menu, X } from 'lucide-react';

export default function LibraryNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-gray-100 shadow-md px-6 py-4 h-15">
            <div className="max-w-7xl mx-auto flex items-center justify-between">


                <div className="hidden md:flex items-center gap-8 text-gray-700">
                    <a href="#" className="hover:text-indigo-600">0
                        <select name="" id="" className='border-none outline-none'><option disabled selected>Categories</option>
                            <option value="">Fiction</option>
                            <option value="">Horror</option>
                            <option value="">Non Fiction</option>
                            <option value="">Drama</option>

                        </select>
                    </a>
                    <a href="#" className="hover:text-indigo-600">About</a>
                    <a href="#" className="hover:text-indigo-600">Contact</a>

                </div>


                <div className="hidden md:flex items-center gap-4">
                    <input type="text" placeholder="Search books..." className="bg-transparent focus:outline-none w-full md:w-64 text-sm" />
                    <Search className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />

                    <button className='p-2 bg-[#F86F55]'>LOGIN</button>
                    <User className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
                </div>


                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


            {
                mobileOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700">
                        <a href="#" className="hover:text-indigo-600">Categories</a>
                        <a href="#" className="hover:text-indigo-600">LOGIN</a>
                    </div>
                )
            }
        </nav >
    );
}