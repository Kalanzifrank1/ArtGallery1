
import { useEffect, useState } from "react"


const TopStories = () => {

    const [stories, setStories] = useState([])
  
    useEffect(() => {
        fetch('/server.json')
                .then(res => res.json())
                .then(data => setStories(data))
    }, [])

  return (
    <div className="space-y-4 mt-8">
        {stories.map(story => (
            <div key={story.id} className="flex flex-row gap-4">
               
                <img src={story.imageUrl} className="w-48 h-48 object-cover" />
                <div>
                  <h2>{story.name}</h2>
                  <p>{story.storyLine}</p>
                </div>

            </div>
        ))}
    </div>
  )
}

export default TopStories
