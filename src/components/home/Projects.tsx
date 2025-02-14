import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <article id="projects" className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
                <h3 className='text-2xl'>
                    Projects
                </h3>
                <Link to='/projects' className="hover:underline underline-offset-2">
                    See more...
                </Link>
            </div>
            <div className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 w-cont bg-pf-dark-6 rounded-2xl'>

            </div>
        </article>
    )
}
