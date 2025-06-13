
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router';
import { useSearchParams, useNavigate } from 'react-router';
import { apiClient } from '../api/client';



function ViewBook () {

  const navigate = useNavigate();
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

  const deleteBook = () => {
    apiClient.delete(`/books/${id}`)
    .then((response) => {
      console.log(response);
      navigate(-1); 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  return (
    <>

      <div className="min-h-screen bg-[#f3fdf] text-gray-700 flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <Sidebar  />
        <div className="flex-1 flex flex-col justify-between bg-white rounded-lg overflow-hidden hover:shadow-[0_4px_8px_#faedcf] shadow-2xl w-full lg:max-w-3xl   pt-2 mx-4 lg:mx-auto  lg:ml-100 ">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-64 sm:h-80 md:h-96 object-contain bg-white p-4"
          />
          <div className="sm:p-6 p-4">
            <h1 className="sm:text-3xl text-[#8a2d3b] font-bold mb-2 flex justify-center text-2xl">{book.title}</h1>
            <h2 className="sm:text-xl text-[#641b2e] mb-4 flex justify-center text-lg text-center">by {book.author}</h2>
            <p className="text-md text-[#633642]">{book.description}</p>
            <p className="text-sm text-[#633642] mt-4 flex justify-center text-center">Published on: {book.publishedDate}</p>

            <div className="pt-1 flex flex-col sm:flex-row justify-between items-center px-4 gap-3 sm:gap-0">
              <Link to ="/book-page"
               
                className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white px-4 py-2 rounded w-full sm:w-auto text-center"
              >
                ← Back 
              </Link>
              <button
                onClick={deleteBook}
                className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white px-4 py-2 rounded w-full sm:w-auto text-center"
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
