import { useEffect, useRef, useState } from 'react'

const ScrollingImages = () => {

    const [imageIdex, setImageIndex] = useState(0)
    const imageRef = useRef(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIdex) => (prevIdex + 1) % images.length)
        }, [3000])
        return () => clearInterval(intervalId)
    }, [])

    const images = [
        "images/test.jpg",
        "images/test2.jpg",
        "images/test3.jpg"
        //more imges
    ]

  return (
    <div className='container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
         <div>
           
            <img
                className='flex flex-1' 
                src='images/grap1.jpg'
            />
             <div>
                <p className='text-xl'>Kidasa Workspace is an art business specializing in the production and sale of drawings,
                     paintings, and crafts.
                     Our mission is to provide high-quality,
                      <span className='text-blue-500'>unique artworks that inspire craetivity</span> 
                      and bring joy to our customers lives.
                       Through our online platform and physical studio, we aim to create a welcoming
                        space or artists and art enthusiasts alike.
                    We do it better when we do it for you
                 </p>
            </div>
        </div>
        <div ref={imageRef} className='relative'>
            <img src={images[imageIdex]} alt='Scrolling' width={500} />
        </div>
       
    </div>
    
  )
}

export default ScrollingImages
