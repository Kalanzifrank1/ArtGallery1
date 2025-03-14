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
    <div className='container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 '>
         <div>
           
            <img
                className='flex flex-1' 
                src='images/mainImage.png'
            />
             <div>
                <p className='text-2xl  text-center'>Kidasa Workspace is an art business specializing in the production and sale of drawings,
                     paintings, and crafts.
                     Our mission is to provide high-quality,
                     {" "} <span className='text-blue-400'>unique artworks that inspire creativity </span> {" "} 
                       and bring joy to our customers lives.
                       Through our online platform and physical studio, we aim to create a welcoming
                        space or artists and art enthusiasts alike.
                    We do it better when we do it for you
                 </p>
                 <p className='text-2xl text-center'>
                    Kidasa Workspce is poised to become a
                     leading destination for original artworks and
                      craetive experiences. With a focus
                      
                 on promotin emerging artists, fostering community 
                 engagement,ad delivering exceptional customer value,
                  we are confident in our ability to succed in the competitive 
                  art market. We look  foward to inspiring creativity 
                    and enriching lives through our passion for Art
                 </p>
            </div>
        </div>
        <div ref={imageRef} className='relative w-100 h-50'>
            <img src={images[imageIdex]} alt='Scrolling' className='w-96 h-96' />
            <div>
               <img src='icons/sport.png' />
            </div>
        </div>
       
    </div>
    
  )
}

export default ScrollingImages
