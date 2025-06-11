
import Navbar from '../components/Navbar'; 
import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';


const BookPage = () => {
  const repeated = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8 ">
         <Sidebar />
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6 mx-auto gap-8">
        {repeated.map((n) => (
          <div
            key={n}
            onClick={() => window.location.href = `/books/${book.id}`}
            className="cursor-pointer group"
          >
            <BookCard />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BookPage;
