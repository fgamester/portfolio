import { isProjectArray, Project, Featured, isFeatured, isTechnologyArray, isContactInfoArray } from "../types";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import MetaTags from "../components/global/MetaTags";
import KnownTechnologies from "../components/home/KnownTechnologies";
import HomeSideNavBar from "../components/home/HomeSideNavBar";
import LoadingSpinner from "../components/global/LoadingSpinner";
import FeaturedProjects from "../components/home/FeaturedProjects";
import FeaturedExercises from "../components/home/FeaturedExercises";
import FeaturedAboutSection from "../components/home/FeaturedAboutSection";
import { ContactInfoSection } from "../components/global/ContactInfoSection";

export default function HomeView() {
  const { data, updateState, globalLoading } = useContext(Context);
  const [featured, setFeatured] = useState<Featured | undefined>(undefined);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  const [exercises, setExercises] = useState<Project[] | undefined>(undefined);
  const [localLoading, setLocalLoading] = useState<boolean>(true);

  const setLocalData = useCallback(() => {
    if (isFeatured(data?.featured)) updateState(data?.featured, setFeatured);
    const projectList = data?.projects?.content.filter(item => data?.featured?.projects?.includes(item.id));
    updateState(projectList, setProjects);
    const exercisesList = data?.exercises?.content.filter(item => data?.featured?.exercises?.includes(item.id));
    updateState(exercisesList, setExercises);
    setTimeout(() => updateState(false, setLocalLoading), 300);
  }, [data])

  useEffect(() => {
    setLocalData();
  }, [data]);

  if (localLoading || globalLoading) return <LoadingSpinner />;

  return isFeatured(featured) ? (
    <div className='flex flex-col items-center gap-pf-4 py-pf-4 text-pf-dark-1'>
      <MetaTags title={`Portafolio de ${featured.about.name} - Desarrollo Web`} description={`Portafolio de ${featured.about.name}: Explora proyectos, ejercicios y conocimientos de desarrollo web, programación y tecnologías como React, Tailwind, Python, Docker y más.`} index author={featured.about.name} url='https://fgamester.netlify.app' />
      <header className='px-pf-8'>
        <h1 className="text-4xl text-center">
          {`Bienvenidos al Portafolio de ${featured.about.name}`}
        </h1>
      </header>
      <div className='flex justify-center gap-pf-4 w-full px-pf-2 sm:px-pf-4'>
        {/*Side Navigation Bar*/}
        <HomeSideNavBar featured={featured} exerciseList={exercises} projectList={projects} />
        <main className='sm:flex-grow lg:flex-grow-0 lg:w-2/3 xl:w-1/2 flex flex-col gap-pf-4'>
          {/*Featured*/}
          <section id='featured' className="flex flex-col gap-pf-3 scroll-mt-[60px]">
            {/*Technologies*/
              isTechnologyArray(featured.technologies) && <KnownTechnologies technologies={featured.technologies} />
            }
            {/*Projects*/
              isProjectArray(projects) && projects.length > 0 && <FeaturedProjects contentList={projects} {...data?.projects?.info && { info: data?.projects?.info }} />
            }
            {/*Exercises*/
              isProjectArray(exercises) && exercises.length > 0 && <FeaturedExercises contentList={exercises} {...data?.projects?.info && { info: data?.projects?.info }} />
            }
          </section>
          {/*About Me*/}
          <section id='about' className="scroll-mt-[60px]">
            {/*Who I am*/}
            <FeaturedAboutSection description={featured.about.description} name={featured.about.name} {...featured.about.image && { image: featured.about.image }} />
            {/*Contact*/
              isContactInfoArray(featured.about.contact) && (
                <ContactInfoSection contactList={featured.about.contact} />
              )
            }
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
