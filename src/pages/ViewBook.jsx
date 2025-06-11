
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router';

const book = {
  id: '',
  title: 'Rich Dad Poor Dad',
  author: 'Robert T. Kiyosaki',
  image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg',
  description:
    'Rich Dad Poor Dad is a personal finance classic that contrasts the financial philosophies of two father figures in the author\'s life. It emphasizes the importance of financial education, investing, and entrepreneurship over traditional employment and saving. The book advocates for building assets that generate passive income, challenging conventional beliefs about money and wealth creation.',
  publishedDate: 'April 2, 1997',
};

const ViewBook = () => {
  return (
    <> 
    
    <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8">
        <Sidebar />
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl mx-auto pt-2">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-96 object-contain bg-white p-4"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 flex justify-center">{book.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4 flex justify-center">by {book.author}</h2>
          <p className="text-md text-gray-500">{book.description}</p>
            <p className="text-sm text-gray-400 mt-4">Published on: {book.publishedDate}</p>

          <div className="pt-1 flex flex-col sm:flex-row gap-100">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => alert('Add Book Clicked')}
              className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default ViewBook;
