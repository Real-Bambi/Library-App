
import Navbar from '../components/Navbar.jsx';
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
  { id: 1, image: FictionImage, title: "Fiction" },
  { id: 2, image: NonFictionImage, title: "Non-Fiction" },
  { id: 3, image: HorrorImage, title: "Horror" },
  { id: 4, image: ThrillerImage, title: "Thriller" },
  { id: 5, image: SciFiImage, title: "Sci-Fic" },
  { id: 6, image: DramaImage, title: "Drama" },
];

    return (

      <div className='relative h-full'>
        {/* <div className="absolute inset-1 bg-gradient-to-r from-black-700 via-black/50 to-black/90 z-2"></div> */}
          <div className=" bg-[url(./assets/images/booklib.jpg))] bg-cover ">
            <Navbar />

            <div >
                <h1 className="font-bold text-center text-6xl pt-10"><span className="text-black">Welcome to</span> <span className="text-red-700 "> BOOK SHELF</span>.</h1>
                <h2 className='font-medium text-center text-5xl pt-10'>Discover the best books <span className="text-white">HERE!</span></h2>
                {/* <ArrowBigDown className=' flex flex-col size-30 items-center text-red-400 animate-bounce'/> */}
            </div>
            <div className="flex  justify-center pt-6">
              <Link to={'/book-page'}><button className="bg-red-800 hover:bg-red-400 px-6 py-2 rounded text-white">VIEW HERE</button></Link>
            </div>
            <div className='w-[80%] grid grid-cols-3 gap-4  pt-8 mx-auto '>
                {cards.map(item  => {
                    return (
                        <HomeCard key={item.id} image={item.image} title={item.title} />
                    )
                })}
            </div>



        </div>
      </div>
    );
}
