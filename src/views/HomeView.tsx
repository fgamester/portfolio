import Exercises from "../components/home/Exercises";
import KnownTechnologies from "../components/home/KnownTechnologies";
import Projects from "../components/home/Projects";
// import SideNavBar from "../components/SideNavBar";
import data from '../../test_data/data_example.json';

export default function HomeView() {
  return (
    <div className='flex flex-col items-center gap-pf-4 pt-pf-4 text-pf-dark-1'>
      <header className=''>
        <h1 className="text-4xl text-center">
          Welcome to FGamester's Portfolio
        </h1>
      </header>
      <div className='flex gap-7 w-full px-pf-2 sm:px-pf-4'>
        {/*Side Navigation Bar*/}
        {/* <SideNavBar /> */}
        <main className='md:w-3/4'>
          {/*Featured*/}
          <section id='featured' className="flex flex-col gap-pf-3">
            {/*Technologies*/}
            <KnownTechnologies technologies={data.technologies} />
            {/*Projects*/}
            <Projects content={data.projects} />
            {/*Exercises*/}
            <Exercises content={data.exercises} />
          </section>
          {/*About Me*/}
          <section id='about'>
            {/*Who I am*/}
            {/*Contact*/}
          </section>
        </main>
      </div>
    </div>
  )
}
