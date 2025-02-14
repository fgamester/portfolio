import jsonData from '../../../test_data/data_example.json';

const technologies = jsonData.technologies;

export default function KnownTechnologies() {
    return (
        <article id='technologies' className='flex flex-col gap-3'>
            <h3 className='text-2xl'>Known Technologies</h3>
            <div className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 w-cont bg-pf-dark-6 rounded-2xl'>
                {technologies.map((item, index) => (
                    <img src={item.src} className='size-pf-10' key={index} alt={`${item.name}_logo`} title={item.name} />
                ))}
            </div>
        </article>
    )
}
