import NotFoundImg from "../assets/images/404.jpg";
import { ArrowBigDownDash } from "lucide-react";
import { Link } from "react-router"; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      
      <div
        className="w-full max-w-md h-96 bg-cover bg-center animate-pulse rounded-lg shadow-lg relative"
        style={{ backgroundImage: `url(${NotFoundImg})` }}
      >
       
        <ArrowBigDownDash className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-black animate-bounce" size={40} />
      </div>

      
      <Link to="/">
        <button className="mt-10 rounded-xl font-extrabold bg-black text-yellow-300 text-lg px-6 py-3 hover:bg-[#BE5B50] transition">
          GO HOME ↤
        </button>
      </Link>
    </div>
  );
}