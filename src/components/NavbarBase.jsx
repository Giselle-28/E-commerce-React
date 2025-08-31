import { Link } from "react-router-dom"




function NavbarBase() {
    return <div>
        <Link to={"/"} className="text-gray-300  hover:text-emerald-400 px-4">Home</Link>
        <Link to={"/contacto"} className="text-gray-300  hover:text-emerald-400 px-1">Contacto</Link>
        
    </div>
}

export default NavbarBase