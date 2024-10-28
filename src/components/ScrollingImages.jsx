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
        "images/test1.JPG",
        "images/test2.JPG",
        "images/test3.JPG"
        //more imges
    ]

  return (
    <div ref={imageRef} className='relative'>
        <img src={images[imageIdex]} alt='Scrolling' height={200} />
    </div>
  )
}

export default ScrollingImages
