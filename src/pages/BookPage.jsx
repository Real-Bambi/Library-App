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
    <div className="min-h-screen bg-[#fbdb93] text-[#8a2d3b] flex flex-row gap-8">
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6 mx-auto gap-8">
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
