import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSearchParams, useNavigate } from 'react-router';
import { apiClient } from '../api/client';
import { useEffect, useState } from 'react';
import SubmitButton from "../components/SubmitButton";


export default function EditBook() {
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

    const putBook = async (data) => {

        // Post Data to API
        try {
            const response = await apiClient.put(`/books/${id}`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            navigate('/book-page');
            
        } catch (error) {
            console.log(error);
        }

    }


    return (

        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8 ">
                <Sidebar />
                </div>


                <div className="bg-[#FBDB93] px-10 lg:w-[50%] rounded-lg  shadow-md flex flex-col items-center absolute top-[20%] lg:left-[35%] lg:h-[110vh]  h-[100vh] w-[90%] left-[5%] ">
                    <p className="text-3xl font-extrabold p-4">Edit Book</p>

                    <form action={putBook} className="bg-[rgba(255,255,255,0.4)] md:w-[90%] lg:w-[100%] h-[80%] rounded-lg shadow-md border border-gray-300 p-8 py-6 px-10 flex flex-col">
                        <div className="flex flex-col lg:flex-row  px-4 py-2 justify-between ">
                            <div className="flex flex-col ">
                                <label htmlFor="type">Book Title</label>
                                <input type="text" required name="title" placeholder="Enter Book Title" className=" py-2 rounded-md border" defaultValue={book.title} /></div>

                            <div className="flex flex-col">
                                <label htmlFor="type">Author's Name</label>
                                <input type="text" required name="author" placeholder="Enter Author's Name" className=" p-2 rounded-md border" defaultValue={book.author} /></div>
                        </div>

                        <div className="flex flex-col lg:flex-row px-4 py-2 justify-between ">
                            <div className="flex flex-col">
                                <label htmlFor="type">Publication Year</label>
                                <input type="number" required name="publicationYear" placeholder="Enter Publication Year" className=" py-2 rounded-md border " defaultValue={book.publicationYear} /></div>

                            <div className="flex flex-col">
                                <label htmlFor="type">ISB Number</label>
                                <input type="number"required name="isbn" placeholder="Enter Book Number" className=" p-2 rounded-md border" defaultValue={book.isbn} /></div>


                        </div>

                        <div className="flex flex-col lg:flex-row px-4 py-2 justify-between">
                            <div className="flex flex-col">
                                <label htmlFor="type">Publishing Company</label>
                                <input type="text" required name="publishingCompany" placeholder="Enter Publishing Company" className=" p-2 rounded-md border" defaultValue={book.publishingCompany} />
                            </div>

                             <div className="flex flex-col ">
                                    <label htmlFor="type">Genre</label>
                                    <select  required name="genre" id="" placeholder="Enter Book Name" className="p-2  rounded-md border " defaultValue={book.genre} >
                                        <option selected disabled>Choose Genre</option>
                                        <option value="history">History</option>
                                        <option value="horror">Horror</option>
                                        <option value="fiction">Fiction</option>
                                        <option value="romance">Romance</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="programming">Programming</option>
                                    </select>
                                </div>

                        </div>

                            <div className="px-4 py-2">
                                <div className="flex flex-col">
                                    <label htmlFor="file">Synopsis</label>
                                    <textarea name="synopsis" placeholder="Enter Book Synopsis" className=" p-2 rounded-md border pb-40" defaultValue={book.synopsis} />
                                </div>


                            </div>
                        
                        <div className=" px-4 py-2 ">
                            <SubmitButton title={"Save Changes"} />
                            
                        </div>
                    </form>


                </div>
    
        </>
    );
}