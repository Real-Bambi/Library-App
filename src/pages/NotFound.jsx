import NotFoundImg from "../assets/images/404.jpg"
import { ChevronsDown } from 'lucide-react';
import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="bg-[url(./assets/images/404.jpg)] h-[100vh] animate-pulse bg-cover w-[50%] ml-50 mb-20 items-center">
            </div>

            

            <div>
                <Link to="/"><button className="rounded-[10px] font-extrabold animate-none bg-black text-[2opx] text-yellow-300 items-center p-4 hover: cursor-pointer  ml-70">HOMEPAGE</button></Link>

            </div>
        </>
    );
}

