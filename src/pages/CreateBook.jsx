import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";

export default function CreateBook() {

    const postBook = (event) => {
        event.preventDefault();
        // Collect form input
        const data = new FormData(event.target);

        // Post Data to API
        apiClient.post("/books",data, {
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })

    }
 
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8 ">
                <Sidebar />

                <div className="flex flex-row w-[80%] ml-[20%] gap-4 pt-10">
                    <div className="w-[50%] ">
                        <form onSubmit={postBook} className="bg-white p-8 rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col   ">
                            <div className="text-3xl font-bold m-auto"><h1>Fill Up Book Details</h1></div>
                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Book Title</label>
                                <input type="text" name="title" id="bookname" placeholder="Enter Book Title" className="  border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Author's Name</label>
                                <input type="text" name="author" placeholder="Enter Author's Name" className=" p-2 rounded-md border" />
                            </div>

                            <div className="flex flex-row px-4 py-2 justify-between">
                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Year</label>
                                    <input type="number" name="publicationYear" placeholder="Enter Publication Year" className=" py-2 rounded-md border" /></div>

                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Company</label>
                                    <input type="text" name="publishingCompany" placeholder="Enter Publication Company" className=" p-2 rounded-md border" /></div>
                            </div>

                            <div className="flex flex-row px-4 py-2 justify-between">
                                <div className="flex flex-col">
                                    <label htmlFor="type">ISB Number</label>
                                    <input type="number" name="isbn" placeholder="Enter ISB Number" className=" p-2 rounded-md border" />
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
                                <textarea name="synopsis" placeholder="Enter Book Synopsis" className=" p-2  pb-40 rounded-md border " />
                            </div>


                            <div className="flex flex-row px-4 py-2">
                             <SubmitButton title={"Update Book"}/>
                            </div>

                        </form>
                    </div>
                    <div className="flex flex-col p-4 w-[50%]  ">
                        <h1 className="text-4xl font-bold pb-15">Your <span className="text-[#fcd271]"> Input </span> <br />Helps Others To Read</h1>
                        <p className="text-3xl ">Most purchased books.</p>
                    </div>
                </div>
            </div>

        </>

    );
}