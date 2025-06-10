


export default function HomeCard ({image,title}) {
    
    return(
        <div className="bg-white shadow-md rounded p-2"> 
            <img src= {image} alt="drama image"  />
                  <h2 className="text-lg font-bold text-center">{title}</h2>

        </div>
    )
}