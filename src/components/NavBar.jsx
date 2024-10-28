import { NavLink } from "react-router-dom"

export const NavBar = () => {

    return(
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <span className="">
                <NavLink to='/'> 
                    <img src="images/test2.JPG" width={100} height={100} alt=""/>
                </NavLink>
                </span>
                
                <span className="container mx-5 text-white font-bold flex space-x-4 justify-end">
                    <NavLink to='/about' className={({isActive}) => isActive ? "text-gray-300" : null}> About </NavLink>
                    <NavLink to='/services' className={({isActive}) => isActive ? "text-gray-300" : null}> services </NavLink>
                    <NavLink to='/stories' className={({isActive}) => isActive ? "text-gray-300" : null}> stories</NavLink>
                    <NavLink to='/projects'className={({isActive}) => isActive ? "text-gray-300": null}> Projects </NavLink>
                </span>
            </div>
            
        </nav>
    )
}

