import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="h-[50px] px-5 flex items-center bg-pf-dark-6 text-white">
            <div className="flex gap-7">
                <div className="flex items-end">
                    <Link to='/' className="text-xl" >Home</Link>
                </div>
                <div className="flex items-end">
                    <Link to='/projects'>Projects</Link>
                </div>
            </div>
        </nav>
    )
}
