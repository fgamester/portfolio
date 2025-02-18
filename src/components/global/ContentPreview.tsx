import { Link } from "react-router-dom";
import { Project as ProjectType } from "../../types";
import Badges from "./Badges";

export default function ContentPreview({ item, key = 0 }: { item: ProjectType, key?: number }) {
  return (
    <article className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 w-cont bg-pf-dark-6 rounded-2xl'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/projects/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <div>
        <Badges badgeList={item.tags} />
      </div>
      <div className={`flex ${key % 2 !== 0 && 'flex-row-reverse'} gap-pf-2 w-full`}>
        <p className="text-justify text-base w-1/2">{item.description}</p>
        <div className="flex justify-center items-center aspect-video overflow-hidden bg-pf-dark-2 rounded-xl w-1/2">
          {
            item.image.src ? <img className="object-cover w-full h-full" src={item.image.src} alt={item.image.alt} />
              : <img className="" src='default_image.svg' alt={item.image.alt} />
          }
        </div>
      </div>
    </article>
  )
}

export function HomeContentPreview({ item, key = 0 }: { item: ProjectType, key?: number }) {
  return (
    <div className='flex justify-start flex-wrap p-pf-4 gap-pf-2 w-cont bg-pf-dark-6 rounded-2xl'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/projects/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <div>
        <Badges badgeList={item.tags} />
      </div>
      <div className={`flex ${key % 2 !== 0 && 'flex-row-reverse'} gap-pf-2 w-full`}>
        <p className="text-justify text-base w-1/2">{item.description}</p>
        <div className="flex justify-center items-center aspect-video overflow-hidden bg-pf-dark-2 rounded-xl w-1/2">
          {
            item.image.src ? <img className="object-cover w-full h-full" src={item.image.src} alt={item.image.alt} />
              : <img className="" src='default_image.svg' alt={item.image.alt} />
          }
        </div>
      </div>
    </div>
  )
}
