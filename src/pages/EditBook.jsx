import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function EditBook() {
    return (

        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-row gap-8 ">
                <Sidebar />


                <div className="bg-amber-200 p-10 w-[50%] rounded-lg flex flex-col items-center absolute top-[20%] left-[35%] h-[80%]">
                    <p className="text-3xl font-bold">Edit Book</p>
                    <form className="bg-[rgba(255,255,255,0.4)] w-[90%] h-[40%] rounded-lg shadow-md border border-gray-300 ">
                        <div className="flex flex-row justify-evenly py-3">
                            <div className="flex flex-col"> 
                                <label htmlFor="type">Book Title</label>
                                <input type="text" name="title" placeholder="Enter Book Title" className=" py-2 rounded-md border" /></div>

                            <div className="flex flex-col">
                                <label htmlFor="type">Author's Name</label>
                                <input type="text" name="author" placeholder="Enter Author's Name" className=" p-2 rounded-md border" /></div>
                        </div>

                        <div className="flex flex-row justify-evenly py-3">
                            <div className="flex flex-col"> 
                                <label htmlFor="type">Publication Year</label>
                                <input type="date" name="publicationYear" placeholder="Enter Publication Year" className=" py-2 rounded-md border" /></div>

                            <div className="flex flex-col">
                                <label htmlFor="type">Publication Company</label>
                                <input type="text" name="publicationCompany" placeholder="Enter Publication Company" className=" p-2 rounded-md border" /></div>
                        </div>

                        <div className="flex flex-row gap-10 px-12">
                            <div className="flex flex-col">
                                <label htmlFor="type">ISB Number</label>
                                <input type="number" name="isbn" placeholder="Enter Book Number" className=" p-2 rounded-md border" /></div>

                            <select name="genre" id="" placeholder="Enter Book Name" className="px-6 rounded-md border h-10" >
                                <option selected disabled>Choose Genre</option>
                                <option value="history">History</option>
                                <option value="horror">Horror</option>
                                <option value="fiction">Fiction</option>
                                <option value="romance">Romance</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="programming">Programming</option>
                            </select>
                        </div>

                    </form>

                    <form className="bg-[rgba(255,255,255,0.4)] w-[100%] h-[40%] rounded-lg shadow-md border border-gray-300  mx-auto py-6 px-10 ">
                        <p className="text-xl text-center font-bold ">What to Edit</p>
                        <div className="flex flex-row gap-4 justify-evenly">
                            <div className="flex flex-col gap-2 px-12 pb-2">
                                <label htmlFor="file">Synopsis</label>
                                <input type="text" name="synopsis" placeholder="Enter Book Synopsis" className=" p-2 rounded-md border" />
                            </div>
                        <div className="flex flex-row gap-4">

                            <select name="genre" id="" placeholder="Enter Book Name" className=" p-2 rounded-md border" >
                                <option selected disabled>Choose Genre</option>
                                <option value="history">History</option>
                                <option value="science">Science</option>
                                <option value="fiction">Fiction</option>
                                <option value="romance">Romance</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="programming">Programming</option>
                            </select>
                        </div>
                        </div>

                    </form>
                    <div className="flex flex-row gap-10">
                        <button type="submit" className="  bg-amber-600 py-2 px-6 font-bold p-4 rounded-md mt-4">Save Changes</button>
                        <button type="submit" className="  bg-amber-600 py-2 px-6 font-bold p-4 rounded-md mt-4">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}