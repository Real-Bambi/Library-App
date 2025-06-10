
import Navbar from '../components/Navbar'; 
import Sidebar from '../components/Sidebar';

const book = {
  id: '',
  title: 'Rich Dad Poor Dad',
  author: 'Robert T. Kiyosaki',
  image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg', 
};

const BookPage = () => {
  const repeated = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="min-h-screen bg-gray-100 text-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-6"><span className='text-red-500'>BOOK</span> <span>SHELF</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {repeated.map((n) => (
          <div
            key={n}
            onClick={() => window.location.href = `/books/${book.id}`}
            className="cursor-pointer group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-[1.02] transition">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain group-hover:opacity-90 transition bg-white p-1"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-400">{book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BookPage;
