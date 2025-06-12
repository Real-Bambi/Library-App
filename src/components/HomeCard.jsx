


export default function HomeCard ({image,title}) {
    
    return(
        <div className="bg-white hover:bg-[#FBDB93] shadow-md rounded p-2 transform hover:scale-[1.10] transition "> 
            <img src= {image} alt="drama image"  />
                  <h2 className=" text-lg font-bold text-center text-orange-950">{title}</h2>

        </div>
    )
}