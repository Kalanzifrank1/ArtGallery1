import Collection from "../components/Collection1"
import Email from "../components/Email"
import ScrollingImages from "../components/ScrollingImages"
import TopStories from "../components/TopStories"

const Home = () => {

    return(
        <div className="">
            <div className="bg-slate-200">   
                <ScrollingImages />
                <Collection />
                <TopStories />
                <Email />
                 
            </div>
            
        </div>
    )
}

export default Home