
import { ArrowBigDown } from 'lucide-react';
import HomeCard from '../components/HomeCard.jsx';
  import FictionImage from '../assets/images/Fiction.jpg';
import NonFictionImage from '../assets/images/non-fiction.jpg';
import HorrorImage from '../assets/images/horror.jpg';
import ThrillerImage from '../assets/images/thriller.jpg';
import SciFiImage from '../assets/images/sci-fi.jpg';
import DramaImage from '../assets/images/drama.jpg';
import { Link } from 'react-router';



export default function Home() {


const cards = [
  { id: 1, image: FictionImage, title: "FICTION" },
  { id: 2, image: NonFictionImage, title: "HISTORY" },
  { id: 3, image: HorrorImage, title: "FANTASY" },
  { id: 4, image: ThrillerImage, title: "PROGRAMMING" },
  { id: 5, image: SciFiImage, title: "SCIENCE" },
  { id: 6, image: DramaImage, title: "ROMANCE" },
];

    return (

      <div className=' h-full'>
        {/* <div className="absolute inset-1 bg-gradient-to-r from-black-700 via-black/50 to-black/90 z-2"></div> */}
        
          <div className="  bg-[url('./assets/images/booklib.jpg'))] bg-cover h-[100vh] md:h-full ">
          

            <div >
                <h1 className="font-bold text-center text-2xl md:text-6xl pt-10"><span className="text-white">Welcome to</span> <span className="text-[#BE5B50] "> BOOK SHELF</span>.</h1>
                <h2 className='font-medium text-center text-3xl md:text-5xl pt-10 text-white'>Discover the best books <span className="text-[#FBDB93]">HERE!</span></h2>
                {/* <ArrowBigDown className=' flex flex-col size-30 items-center text-red-400 animate-bounce'/> */}
            </div>
            <div className="flex  justify-center pt-6">
              <Link to={'/book-page'}><button className="bg-[#8A2D3B] hover:bg-[#641B2E] px-6 py-2 rounded-lg text-white">View Here →</button></Link>
            </div>
            <div className='w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4   pt-8 mx-auto '>
                {cards.map(item  => {
                    return (
                        <Link to={'/book-page'}><HomeCard key={item.id} image={item.image} title={item.title} /></Link>
                    )
                })}
            </div>



        </div>
      </div>
    );
}
