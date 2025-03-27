import { useContext, useState } from "react";
import { Context } from "../context/GloblalContext";
import Exercises from "../components/home/Exercises";
import KnownTechnologies from "../components/home/KnownTechnologies";
import Projects from "../components/home/Projects";
import { isData } from "../types";
import HomeSideNavBar from "../components/home/HomeSideNavBar";

export default function HomeView() {
  const { data } = useContext(Context);

  return isData(data) ? (
    <div className='flex flex-col items-center gap-pf-4 py-pf-4 text-pf-dark-1'>
      <header className=''>
        <h1 className="text-4xl text-center">
          Welcome to FGamester's Portfolio
        </h1>
      </header>
      <div className='flex justify-center gap-pf-4 w-full px-pf-2 sm:px-pf-4'>
        {/*Side Navigation Bar*/}
        <HomeSideNavBar />
        <main className='sm:flex-grow lg:flex-grow-0 lg:w-2/3 xl:w-1/2'>
          {/*Featured*/}
          <section id='featured' className="flex flex-col gap-pf-3">
            {/*Technologies*/}
            <KnownTechnologies technologies={data?.technologies} />
            {/*Projects*/}
            <Projects content={data?.projects} />
            {/*Exercises*/}
            <Exercises content={data?.exercises} />
          </section>
          {/*About Me*/}
          <section id='about'>
            {/*Who I am*/}
            {/*Contact*/}
          </section>
        </main>
      </div>
    </div>
  ) : (
    <main className="text-pf-dark-1 flex flex-col items-center justify-center gap-pf-4 px-pf-4">
      <h1 className="text-5xl text-center white">
        {'There was a problem loading the information '}
        <span className="whitespace-nowrap">
          {':('}
        </span>
      </h1>
      <h1 className="text-5xl">
        Please try later
      </h1>
    </main>
  );
}
