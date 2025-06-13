import { Link } from "react-router";

export default function BookCard({ book }) {
    return (
        <>
            <div className="bg-[#faedcf] rounded-lg overflow-hidden shadow-[0_4px_8px_#8a2d3b55] hover:shadow-amber-950 transform hover:scale-[1.02] transition pt-2 group cursor-pointer w-full sm:max-w-md lg:max-w-lg">

                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-60 overflow-auto object-contain group-hover:opacity-90 transition bg-[#faedcf] p-1 sm:h-64 md:h-72"
                />

                <div className="p-4">
                    <h2 className="text-lg font-semibold line-clamp-1">{book.title}</h2>
                    <p className="text-sm text-[#641b2e] mb-2 line-clamp-1">{book.author}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{book.description}</p>


                    <div className="flex gap-15 justify-between pt-1 flex-col sm:flex-row items-center">

                        <div className="flex flex-col sm:flex-row gap-3 justify-between pt-1 items-center md:gap-20 ">
                            <Link to={`/view-book?id=${book.id}`}

                                className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white p-2 rounded-md shadow-md hover:shadow-lg transition w-full sm:w-auto text-center"
                                aria-label="Add Book"
                            >

                                View Book

                            </Link>

                            <Link
                                to={`/edit-book?id=${book.id}`}
                                className="bg-[#8a2d3b] hover:bg-[#641b2e] text-white p-2 rounded-4xl shadow-md hover:shadow-lg transition w-full sm:w-auto flex items-center justify-center "
                                aria-label="Edit Book">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3.536 3.536-6 6H9v-3z" />
                                </svg>

                            </Link>


                            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-[#774754] text-[#fbdb93] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                                Edit Book
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    );
}
