import { useEffect, useState } from "react"

const Collection = () => {

    const [image, setImage] = useState([])
  
    useEffect(() => {
        fetch('/collectionServer.json')
                .then(res => res.json())
                .then(data => setImage(data))
    }, [])

  return (
    <div className="space-y-4 mt-8">
        <div className="container mx-auto py-8 grid grid-cols-3 md:grid-cols-4 gap-2">
            {image.map(image => (
                <div key={image.id} className="flex flex-row gap-4 text-blue-400 border border-x-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                
                    <img src={image.image} className="w-48 h-48 object-cover"/>
                    {/*
                        <div>
                        <p className="text-pretty"> <span className="text-black">Title: </span> {image.title}</p>     
                        <p><span className="text-black">Medium: </span> {image.medium}</p>
                        <p><span className="text-black">Size:</span> {image.size}</p>
                        </div>
                    */}

                </div>
            ))}
        </div>
    </div>
  )
}

export default Collection

