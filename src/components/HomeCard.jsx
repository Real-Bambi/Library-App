


export default function HomeCard ({image,title}) {
    
    return(
        <div className="bg-white shadow-md rounded"> 
            <img src= {image} alt="drama image"  />
                  <h2 className="text-lg font-bold">{title}</h2>

        </div>
    )
}