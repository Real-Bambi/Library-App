
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router';
import { useSearchParams } from 'react-router';
import { apiClient } from '../api/client';



function ViewBook () {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [book, setBook] = useState({});

  const getBook = () => {
    apiClient.get(`/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data.data);
       
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getBook, []);

  return (
    <>

      <div className="min-h-screen bg-[#fbdb93] text-gray-700 flex flex-row gap-8">
        <Sidebar />
        <div className="bg-[#fbdb93] rounded-lg overflow-hidden shadow-[0_4px_8px_#8a2d3b55] w-full max-w-3xl mx-auto pt-2">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-96 object-contain bg-[#fbdb93] p-4"
          />
          <div className="p-6">
            <h1 className="text-3xl text-[#8a2d3b] font-bold mb-2 flex justify-center">{book.title}</h1>
            <h2 className="text-xl text-[#641b2e] mb-4 flex justify-center">by {book.author}</h2>
            <p className="text-md text-[#633642]">{book.description}</p>
            <p className="text-sm text-[#633642] mt-4 flex justify-center">Published on: {book.publishedDate}</p>

            <div className="pt-1 flex flex-col sm:flex-row gap-100">
              <Link to ="/"
               
                className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white px-4 py-2 rounded"
              >
                ← Back to Home
              </Link>
              <button
                onClick={() => alert('Delete Book Clicked')}
                className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white px-4 py-2 rounded"
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
