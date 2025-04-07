import { Fragment } from "react"

const commonTags = [
  'html5',
  'css',
  'javascript',
  'typescript',
  'bootstrap',
  'tailwindcss',
  'react',
  'python',
  'docker',
  'mysql',
  'postgresql',
  'express',
  'nodejs',
  'mongodb',
  'flask',
]

export const TagConstructor = ({ tag }: { tag: string }) => {
  const formattedTag = tag.toLowerCase().replace(/[.#]/g,"");
  const isCommonTag = commonTags.includes(formattedTag);
  
  return (
    <p
      className={`size-fit px-tagbadge-x pb-[3px] rounded-md ${isCommonTag ? `bg-tags-bg-${formattedTag} text-tags-text-${formattedTag}` : 'bg-white text-black'}`}
    >
      {tag}
    </p>
  );
}

export default function TagBadges({ badgeList }: { badgeList: string[] }) {

  return (
    <div className="flex flex-wrap gap-pf-1 justify-center w-full">
      {
        badgeList.map((item, index) => (
          <Fragment key={index}>
            <TagConstructor tag={item} />
          </Fragment>
        ))
      }
    </div>
  );
}