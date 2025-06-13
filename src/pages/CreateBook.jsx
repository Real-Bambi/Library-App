import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";
import Love from "../assets/images/img1.jpg"
import Hope from "../assets/images/img4.jpg"
import Faith from "../assets/images/img5.jpg"

export default function CreateBook() {
    const navigate = useNavigate();
    const postBook = async (data) => {

        // Post Data to API
        try {
            const response = await apiClient.post("/books", data, {
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
            <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8  ">
                <Sidebar />


                <div className="flex flex-col lg:flex-row w-[90%] lg:ml-[10%] gap-4 pt-10">
                    <div className="w-[100%] lg:w-[50%] ml-[10%]">
                        <form action={postBook} className="bg-white p-8 rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col">
                            <div className="text-3xl font-bold m-auto"><h1>Fill Up Book Details</h1></div>

                            <div className="flex flex-col p-4 ">
                                <label htmlFor="type"  >Book Title</label>
                                <input type="text" required name="title" id="bookname" placeholder="Enter Book Title" className="  border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Author's Name</label>
                                <input type="text" required name="author" placeholder="Enter Author's Name" className=" p-2 rounded-md border" />
                            </div>

                            <div className="flex flex-col px-4 py-2 justify-between lg:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Year</label>
                                    <input type="number" required name="publicationYear" placeholder="Enter Publication Year" className=" py-2 rounded-md border" /></div>

                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Company</label>
                                    <input type="text" required name="publishingCompany" placeholder="Enter Publication Company" className=" p-2 rounded-md border" /></div>
                            </div>

                            <div className="flex flex-col px-4 py-2 justify-between lg:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="type">ISB Number</label>
                                    <input type="number" required name="isbn" placeholder="Enter ISB Number" className=" p-2 rounded-md border" />
                                </div>

                                <div className="flex flex-col p-4">
                                    <select name="genre" id="" className=" p-2 rounded-md border" >
                                        <option selected disabled >Choose Genre</option>
                                        <option value="history">History</option>
                                        <option value="science">Science</option>
                                        <option value="fiction">Fiction</option>
                                        <option value="romance">Romance</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="programmming">Programming</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Synopsis</label>
                                <textarea required name="synopsis" placeholder="Enter Book Synopsis" className=" p-2  pb-40 rounded-md border " />
                            </div>


                            <div className="flex flex-row px-4 py-2">
                                <SubmitButton title={"Update Book"} />
                            </div>

                        </form>
                    </div>
                    <div className="flex flex-col p-4 lg:w-[50%]  w-[100%] ">
                        <h1 className="text-4xl font-bold pb-15">Your <span className="text-[#fcd271]"> Input </span> <br />Helps Others To Read</h1>
                        <p className="text-3xl ">Most purchased books.</p>

                        <div className=" lg:h-[50vh] lg:pt-20 pt-15 gap-2 flex flex-col lg:flex-row ">
                            <div className="flex flex-col p-6 bg-white  rounded-2xl h-[50vh] ">
                                <img src={Love} alt="image" />
                                <div className="text-lg font-medium ">
                                    <p >High Lifestyle</p>
                                    <p>Steve Wonders, 2000</p>
                                    <p>14K readers</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 bg-white  rounded-2xl h-[50vh]">
                                <img src={Hope} alt="image" />
                                <div className="text-lg font-medium ">
                                    <p >High Lifestyle</p>
                                    <p>Steve Wonders, 2000</p>
                                    <p>14K readers</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 bg-white  rounded-2xl h-[50vh]">
                                <img src={Faith} alt="image" />
                                <div className="text-lg font-medium ">
                                    <p >High Lifestyle</p>
                                    <p>Steve Wonders, 2000</p>
                                    <p>14K readers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}