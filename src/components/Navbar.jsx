import React, { useState } from 'react';
import { LibraryBig, Search, User, Menu, X, Plus, View, Trash } from 'lucide-react';
import { Link } from "react-router";

export default function LibraryNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-gray-100 shadow-md px-6 py-4 h-15 mt-4 ml-10 mr-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">


                <div className="hidden md:flex items-center gap-8 text-gray-700">
                    <Link to="#" className="hover:text-indigo-600">
                        <select name="" id="" className='border-none outline-none'><option disabled selected>Categories</option>
                            <option value="">Fiction</option>
                            <option value="">Horror</option>
                            <option value="">Non Fiction</option>
                            <option value="">Drama</option>
                            <option value="">Thriller</option>
                            <option value="">Sci-Fic</option>
                        </select>
                    </Link>

                    <span className='gap-0 flex '><Plus className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer ml-20" />
                        <Link to="#" className="hover:text-indigo-600">Add Book</Link></span>

                    <span className='gap-0 flex hover:text-indigo-600'><View className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <Link to="#" className="hover:text-indigo-600">View Book</Link></span>

                    <span className='gap-0 flex hover:text-indigo-600'><Trash className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <Link to="#" className="hover:text-indigo-600">Delete Book</Link></span>
                </div>


                <div className="hidden md:flex items-center gap-6">
                    <div className='flex'><input type="text" placeholder="Search books..." className="bg-transparent focus:outline-none w-full md:w-64 text-sm" />
                        <Search className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" /></div>

                    <button className='p-2 rounded-[10px] bg-[#F86F55] ml-10'><a href="#">LOGIN</a></button>
                    <User className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
                </div>


                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


            {
                mobileOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700">
                        <Link to="#" className="hover:text-indigo-600">Categories</Link>
                        <Link to="#" className="hover:text-indigo-600">LOGIN</Link>
                    </div>
                )
            }
        </nav >
    );
}