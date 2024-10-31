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
        <div className="container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {image.map(image => (
                <div key={image.id} className="flex flex-row gap-4">
                
                    <img src={image.image} className="w-48 h-48 object-cover" width={500} height={500}/>
                
                </div>
            ))}
        </div>
    </div>
  )
}

export default Collection

