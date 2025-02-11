import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="h-[50px] px-5 flex justify-between items-center bg-pf-dark-6 text-white">
            <div className="flex gap-7">
                <div className="flex items-end">
                    <Link to='/' className="text-xl" >Home</Link>
                </div>
                <div className="flex items-end gap-5">
                    <Link to='/projects'>Projects</Link>
                    <Link to='/exercises'>Exercises</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/hobbies'>My hobbies</Link>
                </div>
            </div>
            <button className="bg-pf-dark-5 size-8 rounded-full">
                O
            </button>
        </nav>
    )
}
