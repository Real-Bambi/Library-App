

export default function Home() {

    return (
        <div className='bg-[url(./assets/images/booklib.jpg)] bg-cover bg-center w-[100%] h-[100vh] absolute inset-1 bg-gradient-to-r from-brown-600 via-transparent to-black opacity-90 z-10'>
            <h1 className='text-8xl italics gap-2 text-center pt-35 font-bold'><span className="text-red-700">BOOK</span><span className="text-black">SHELF</span></h1>
            <div className="flex justify-center pt-4">
            <button className="px-6 py-2 rounded text-white bg-red-700 flex flex-col items-center justify-center text-center hover:bg-red-400 ">View Books</button>
            </div>
        </div>
    );
}