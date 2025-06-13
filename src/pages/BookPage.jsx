import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';
import { useState, useEffect } from 'react';
import { apiClient } from '../api/client';

const BookPage = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    apiClient.get("/books")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getBooks, []);

  return (
    <div className="min-h-screen bg-[#eafaff] text-[#8a2d3b] flex lg:flex-row gap-8 flex-col ">
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:pl-70">
        {books.map((book) => (
          <div
            key={book.id}
            className="cursor-pointer group"
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
