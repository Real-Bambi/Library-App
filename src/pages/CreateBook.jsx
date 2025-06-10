import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CreateBook() {


    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className="flex flex-row w-[90%] gap-x-20 m-auto pt-10">
            <div className="w-[50%]">
                <form className="bg-white p-8 rounded-lg shadow-md border border-gray-300  mx-auto py-6 px-10 flex flex-col  ">
                    <div className="text-3xl font-bold m-auto"><h1>Fill Up Book Details</h1></div>
                    <div className="flex flex-col p-4">
                        <label htmlFor="type">Book Name</label>
                        <input type="text" name="bookname" id="bookname" placeholder="Enter Book Name"  className=" p-2 rounded-md"/>
                    </div>
                    <div className="flex flex-col p-4">
                        <label htmlFor="type">Author's Name</label>
                        <input type="text" name="author name" placeholder="Enter Author's Name" className=" p-2 rounded-md" />
                    </div>
                    <div className="flex flex-row px-4 py-2 justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="type">ISB Number</label>
                            <input type="number" name="Booknumber" placeholder="Enter ISB Number" className=" p-2 rounded-md"  />
                        </div>

                        <div className="flex flex-col p-4">
                            <select name="Genre" id="" placeholder="Enter Book Name" className=" p-2 rounded-md" >
                                <option selected disabled>Choose Genre</option>
                                <option value="drama">Horror</option>
                                <option value="horror">Horror</option>
                                <option value="fiction">Fiction</option>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="non-fiction">Non-fiction</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col p-4">
                        <label htmlFor="type">Book Name</label>
                        <textarea name="bookdescription" placeholder="Enter Book Description"  className=" p-2  pb-40 rounded-md " />
                    </div>


                    <div>
                        <button type="submit" className="  bg-amber-600 py-2 px-6 font-bold p-4 rounded-md">Submit </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col p-4  ">
             <h1 className="text-4xl font-bold pb-15">Your <span className="text-amber-500"> Input </span> <br />Helps Others To Read</h1>
             <p className="text-3xl ">Most purchased books.</p>
            </div>
        </div>

    </>

    );
}