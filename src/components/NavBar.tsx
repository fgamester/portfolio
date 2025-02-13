import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="h-pf-10 px-pf-4 flex justify-between items-center bg-pf-dark-6 text-pf-dark-1">
            <div className="flex gap-pf-6">
                <div className="flex items-end">
                    <Link to='/' className="text-xl" >Home</Link>
                </div>
                <div className="flex items-end gap-pf-4">
                    <Link to='/projects'>Projects</Link>
                    <Link to='/exercises'>Exercises</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/hobbies'>My hobbies</Link>
                </div>
            </div>
            <button className="bg-pf-dark-5 size-pf-7 rounded-full">
                O
            </button>
        </nav>
    )
}
