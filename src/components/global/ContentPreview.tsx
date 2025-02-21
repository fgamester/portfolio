import { Link } from "react-router-dom";
import { Project as ProjectType } from "../../types";
import Badges from "./Badges";

export default function ContentPreview({ item, category, index = 0 }: { item: ProjectType, category: string, index?: number }) {
  return (
    <article className='flex justify-evenly flex-wrap p-pf-4 gap-pf-2 bg-pf-dark-6 rounded-2xl'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/${category}/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <div>
        <Badges badgeList={item.tags} />
      </div>
      <div className={`flex ${index % 2 !== 0 && 'flex-row-reverse'} gap-pf-2 w-full`}>
        <p className="text-justify text-base w-1/2">{item.description}</p>
        <div className="flex justify-center items-center aspect-video overflow-hidden bg-pf-dark-2 rounded-xl w-1/2">
          {
            item.image ?
              <img className="object-cover w-full h-full" src={item.image} alt={`${item.name}_image`} />
              :
              <div className="flex flex-col justify-center items-center">
                <img className="" src='default_image.svg' alt='default_image' />
                <p className="text-black text-xl text-center">Image Not Found</p>
              </div>
          }
        </div>
      </div>
    </article>
  )
}

export function HomeContentPreview({ item, category, index = 0 }: { item: ProjectType, category: string, index?: number }) {
  return (
    <div className='flex justify-start flex-wrap p-pf-4 gap-pf-2 bg-pf-dark-6 rounded-2xl'>
      <header className="w-full flex justify-between items-start">
        <Link to={`/${category}/${item.id}`} className="text-xl text-start">
          {item.name}
        </Link>
        <p className="text-xs">
          {item.date}
        </p>
      </header>
      <div>
        <Badges badgeList={item.tags} />
      </div>
      <div className={`flex items-center flex-col-reverse ${index % 2 !== 0 ? 'md:flex-row-reverse':'md:flex-row'} md:items-start gap-pf-2 w-full`}>
        <p className="text-justify text-base md:w-1/2">{item.description}</p>
        <div className="flex justify-center items-center aspect-video overflow-hidden bg-pf-dark-2 rounded-xl sm:w-3/4 md:w-1/2">
          {
            item.image ?
              <img className="object-cover w-full h-full" src={item.image} alt={`${item.name}_image`} />
              :
              <div className="flex flex-col justify-center items-center">
                <img className="" src='default_image.svg' alt='default_image' />
                <p className="text-black text-xl text-center">Image Not Found</p>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
