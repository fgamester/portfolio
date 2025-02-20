export default function SideNavBar() {
    return (
        <nav className='flex flex-col bg-pf-dark-4 p-pf-4 rounded-2xl size-fit'>
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
                    <a className='hover:underline text-sm' href="contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
