import { Technology } from "../../types";

export default function KnownTechnologies({ technologies }: { technologies: Technology[] | undefined }) {
    return technologies ? (
        <article id='technologies' className='flex flex-col gap-pf-3'>
            <header>
                <h3 className='text-2xl'>Known Technologies</h3>
            </header>
            <div className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 bg-pf-dark-6 rounded-2xl'>
                {technologies.map((item, index) => {
                    return item.image ? (
                        <img src={item.image} className='size-pf-10' key={index} alt={`${item.name}_logo`} title={item.name} />
                    ) : null;
                })}
            </div>
        </article>
    ) : null;
}
