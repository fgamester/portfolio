import { Fragment, useMemo } from "react"

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
  const lowerTag = tag.toLowerCase();
  const isCommonTag = commonTags.includes(lowerTag);

  return (
    <p
      className={`size-fit px-tagbadge-x rounded-sm
        ${isCommonTag ? `bg-tags-bg-${lowerTag} text-tags-text-${lowerTag}` : 'bg-white text-black'}`}
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