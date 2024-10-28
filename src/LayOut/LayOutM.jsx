import Footer from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { Outlet } from "react-router-dom"

const LayOutM = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayOutM
