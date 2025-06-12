import NotFoundImg from "../assets/images/404.jpg"
import {  ArrowBigDownDash } from 'lucide-react';
import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="bg-[url(./assets/images/404.jpg)] h-[95vh] animate-pulse bg-cover w-[50%] ml-50 items-center">
            </div>

            

            <div>
                <Link to="/"><button className="rounded-[10px] font-extrabold animate-none bg-black text-[2opx] text-[#FCF259] items-center p-4 hover:bg-[#BE5B50] cursor-pointer ml-120">GO HOME ↤</button></Link>

            </div>
        </>
    );
}

