import { useState } from "react"
import { NavLink } from "react-router-dom"

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return(
        <nav className=" bg-gray-700">
            <div className="container mx-auto px-4 flex justify-between items-center  text-sm py-4 mb-5 border-b border-b-gray-400">
                <span className="">
                <NavLink to='/'> 
                    <img src="images/logo.jpg" width={100} height={100} alt=""/>
                </NavLink>
                <span className="text-3xl text-white">TIRED OF THE NON-DURABLES? <span className="text-orange-300">We got the solution</span></span>
                </span>
                
                <span className="container hidden md:flex mx-5 text-white font-bold space-x-4 justify-end">
                    <NavLink to='/about' 
                        className={({isActive}) => isActive ? "text-gray-300" : null}>
                        About
                    </NavLink>
                    <NavLink to='/services'
                         className={({isActive}) => isActive ? "text-gray-300" : null}>
                         services
                     </NavLink>
                    <NavLink to='/stories' 
                        className={ ({isActive}) => isActive ? "text-gray-300" : null}>
                        stories
                    </NavLink>
                    <NavLink to='/projects'
                         className={({isActive}) => isActive ? "text-gray-300": null}>
                        Projects 
                    </NavLink>
                </span>

                {!isMenuOpen && <button className="md:hidden w-20 h-20 bg-blend-darken mb-0" onClick={toggleMenu}>
                    <img src="icons/menu.png"/>
                </button>}
                
                {" "}
                <div className={`md:hidden bg-white text-black text-xl ${isMenuOpen ? 'block absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  group-hover:block' : 'hidden'}`}>
                    {isMenuOpen && (
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                            <ul>
                                <li>
                                    <NavLink to='/about' 
                                        className={({isActive}) => isActive ? "text-gray-300" : null} onClick={handleLinkClick}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/services'
                                        className={({isActive}) => isActive ? "text-gray-300" : null} onClick={handleLinkClick}>
                                        services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/stories' 
                                        className={({isActive}) => isActive ? "text-gray-300" : null} onClick={handleLinkClick}>
                                        stories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/projects'
                                        className={({isActive}) => isActive ? "text-gray-300": null} onClick={handleLinkClick}>
                                        Projects 
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
            
        </nav>
    )
}

