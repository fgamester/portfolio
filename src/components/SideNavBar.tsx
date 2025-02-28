export default function SideNavBar() {
    return (
        <div>
            <div className="flex justify-center items-center bg-pf-dark-4 aspect-square rounded-full h-pf-10 p-pf-2 lg:hidden">
                {">"}
            </div>
            <nav className='sticky top-pf-sb flex flex-col bg-pf-dark-4 p-pf-4 rounded-2xl size-fit min-w-fit'>
                <h4 className='text-xl text-center'>
                    Content List
                </h4>
                <a className='hover:underline text-lg' href="#featured">Featured</a>
                <ul className='flex flex-col pl-5'>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#technologies">Known Technologies</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#projects">Projects</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#exercises">Exercises</a>
                    </li>
                </ul>
                <a className='hover:underline text-lg' href="#about">About Me</a>
                <ul className='flex flex-col pl-5'>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#whoiam">Who I Am</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
