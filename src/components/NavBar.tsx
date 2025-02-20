import { Link, useLocation } from "react-router-dom";


export default function NavBar() {
    const currentPath = useLocation().pathname;

    return (
        <nav className={`h-pf-10 px-pf-4 flex justify-between items-center bg-pf-dark-6 text-pf-dark-1 fixed top-0 left-0 right-0`}>
            <div className="flex gap-pf-6">
                <div className="flex items-end">
                    <Link to='/' className="text-xl" >Home</Link>
                </div>
                <div className="flex items-end gap-pf-4">
                    <Link to='/projects' className={`hover:underline underline-offset-2 ${currentPath === '/projects' && 'text-pf-dark-2 underline'}`}>Projects</Link>
                    <Link to='/exercises' className={`hover:underline underline-offset-2 ${currentPath === '/exercises' && 'text-pf-dark-2 underline'}`}>Exercises</Link>
                    <Link to='/about' className={`hover:underline underline-offset-2 ${currentPath === '/about' && 'text-pf-dark-2 underline'}`}>About Me</Link>
                    <Link to='/hobbies' className={`hover:underline underline-offset-2 ${currentPath === '/hobbies' && 'text-pf-dark-2 underline'}`}>My hobbies</Link>
                </div>
            </div>
            <button className="bg-pf-dark-5 size-pf-7 rounded-full">
                O
            </button>
        </nav>
    )
}
