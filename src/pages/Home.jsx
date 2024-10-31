import Collection from "../components/Collection1"
import Email from "../components/Email"
import ScrollingImages from "../components/ScrollingImages"
import TopStories from "../components/TopStories"

const Home = () => {

    return(
        <div className="">
            <div>   
                    <ScrollingImages />
                    <Collection />
                    <TopStories />
                    <Email />
                 
            </div>
            
        </div>
    )
}

export default Home