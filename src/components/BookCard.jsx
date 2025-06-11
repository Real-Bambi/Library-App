import { Link } from "react-router";

            export default function BookCard() {
    return (
       <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-[1.02] transition">
            <Link to='/view-book'>  <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain group-hover:opacity-90 transition bg-white p-1"
              /> </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-400 p-4">{book.author}</p>
               <Link to = '/create-book'> <button className='bg-yellow-300 hover:bg-yellow-600 text-white p-1.5 rounded-lg'>Add Book</button> </Link>
                
               <Link to = '/edit-book'>  <button className='bg-purple-400 hover:bg-purple-700 text-white p-1.5 rounded-lg mx-2'>Edit Book</button></Link>
              </div>
              </div>
            
    );
}

const book = {
  id: '',
  title: 'Rich Dad Poor Dad',
  author: 'Robert T. Kiyosaki',
  image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg', 
};