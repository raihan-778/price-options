
import { useState } from "react";
import { RiCloseLargeLine, RiMenuUnfoldFill } from "react-icons/ri";
import Link from '../link/Link';

const NavBar = () => {
    const [open,setOpen]=useState(false)

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/login", name: "Login" },
        { id: 5, path: "/logout", name: "Logout" },
      ];
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className='text-2xl py-2 bg-green-800 text-white-200 md:hidden'>
                {open===true?
               <RiCloseLargeLine />
                :<RiMenuUnfoldFill />}
            
            
            </div>

            
               <ul className={`bg-green-900 duration-1000
               ${open?'top-10':'-top-44'}
                 text-center ml-1 rounded-md md:flex absolute md:static`}> {routes.map(route=><Link key={route.id} route={route}></Link>)}</ul>
            
        </nav>
    );
};

export default NavBar;