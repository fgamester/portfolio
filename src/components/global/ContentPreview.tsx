import { Link } from "react-router-dom";
import { Project as ProjectType } from "../../types";
import TagBadges from "./TagBadges";

export default function ContentPreview({ item, group, index = 0 }: { item: ProjectType, group: 'projects' | 'exercises', index?: number }) {
  return (
    <article className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 bg-pf-dark-4 rounded-2xl w-full'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/content/${group}/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <TagBadges badgeList={item.tags} />
      <div className={`flex gap-pf-2 w-full`}>
        <p
          className="text-justify text-base"
        >{`${item.description.split("\n")[0]} `}
          <Link to={`/content/${group}/${item.id}`} className="hover:underline underline-offset-2">
            Continuar leyendo...
          </Link>
        </p>
        {/* <div className="flex flex-col justify-center items-center overflow-hidden bg-pf-dark-2 rounded-xl aspect-video">
          {item.image ? (
            <img className="object-cover w-full h-full rounded-xl aspect-video" src={item.image} alt={`${item.name}_image`} />
          ) : (
            <>
              <img className="" src='default_image.svg' alt='default_image' />
              <p className="text-black text-xl text-center">Image Not Found</p>
            </>
          )}
        </div> */}
      </div>
    </article>
  )
}

export function HomeContentPreview({ item, group, index = 0 }: { item: ProjectType, group: 'projects' | 'exercises', index?: number }) {
  return (
    <div className='flex justify-start flex-wrap p-pf-4 gap-pf-2 bg-pf-dark-4 rounded-2xl'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/content/${group}/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <TagBadges badgeList={item.tags} />
      <div className={`flex items-center flex-col-reverse ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-start gap-pf-2 w-full`}>
        <p
          className="text-justify text-base"
        >{`${item.description.split("\n")[0]} `}
          <Link to={`/content/${group}/${item.id}`} className="hover:underline underline-offset-2">
            Continuar leyendo...
          </Link>
        </p>
        {/*  <div className="flex justify-center items-center aspect-video overflow-hidden bg-pf-dark-2 rounded-xl md:w-3/4 lg:w-1/2">
          {item.image ? (
            <img className="object-cover w-full h-full" src={item.image} alt={`${item.name}_image`} />
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img className="" src='default_image.svg' alt='default_image' />
              <p className="text-black text-xl text-center">Image Not Found</p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}
