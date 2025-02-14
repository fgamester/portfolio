import KnownTechnologies from "../components/home/KnownTechnologies"
import Projects from "../components/home/Projects"
import SideNavBar from "../components/SideNavBar"

export default function HomeView() {
  return (
    <div className='flex flex-col items-center gap-pf-4 pt-pf-4 text-pf-dark-1'>
      <header className=''>
        <h1 className="text-4xl">
          Welcome to FGamester's Portfolio
        </h1>
      </header>
      <div className='flex gap-7'>
        {/*Side Navigation Bar*/}
        <SideNavBar />
        <main className='w-cont'>
          {/*Featured*/}
          <section id='featured' className="flex flex-col gap-pf-3">
            {/*Technologies*/}
            <KnownTechnologies />
            {/*Projects*/}
            <Projects />
            {/*Exercises*/}
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
