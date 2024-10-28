
import { useEffect, useState } from "react"


const TopStories = () => {

    const [stories, setStories] = useState([])
  
    useEffect(() => {
        fetch('/server.json')
                .then(res => res.json())
                .then(data => setStories(data))
    }, [])

  return (
    <div>
        {stories.map(story => (
            <div key={story.id}>
                <h2>{story.name}</h2>
                <p>{story.storyLine}</p>
                <img src={story.imageUrl} />
            </div>
        ))}
    </div>
  )
}

export default TopStories
