import jsonData from '../../test_data/data_example.json';

const technologies = jsonData.technologies;

export default function HomeView() {
  return (
    <div className='flex flex-col items-center gap-5 pt-4 text-pf-dark-1'>
      <header className=''>
        <h1 className="text-4xl">
          Welcome to FGamester's Portfolio
        </h1>
      </header>
      <div className='flex gap-7'>
        <aside>
          <h3>
            Content List
          </h3>
        </aside>
        <main className='w-cont'>
          <section id='featured'>
            <h2 className='text-3xl'>Featured</h2>
            <article>
              <h3 className='text-2xl'>Known Technologies</h3>
              <div className='flex justify-evenly flex-wrap gap-pf-2 w-cont bg-pf-dark-6 p-pf-3 rounded-2xl'>
                {technologies.map((item, index) => (
                  <img src={item.src} className='size-12' key={index} alt={`${item.name}_logo`} />
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}
