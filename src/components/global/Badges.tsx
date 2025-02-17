export const HTML5 = ({ key = 'html5' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#E34F26]">HTML5</p>
  )
}

export const CSS = ({ key = 'css' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#663399]">CSS</p>
  )
}

export const JavaScript = ({ key = 'javascript' }) => {
  return (
    <p key={key} className="text-black size-fit px-budget-x rounded-sm bg-[#F7DF1E]">JavaScript</p>
  )
}

export const TypeScript = ({ key = 'typescript' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#3178C6]">TypeScript</p>
  )
}

export const Bootstrap = ({ key = 'bootstrap' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#7952B3]">Bootstrap</p>
  )
}

export const TailwindCSS = ({ key = 'tailwindcss' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#06B6D4]">TailwindCSS</p>
  )
}

export const React = ({ key = 'react' }) => {
  return (
    <p key={key} className="text-black size-fit px-budget-x rounded-sm bg-[#61DAFB]">React</p>
  )
}

export const Python = ({ key = 'python' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#3776AB]">Python</p>
  )
}

export const MySQL = ({ key = 'mysql' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#4479A1]">MySQL</p>
  )
}

export const PostgreSQL = ({ key = 'postgresql' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#4169E1]">PostgreSQL</p>
  )
}

export const Docker = ({ key = 'docker' }) => {
  return (
    <p key={key} className="text-white size-fit px-budget-x rounded-sm bg-[#2496ED]">Docker</p>
  )
}

const BadgesComponents = {
  'html5': <HTML5 />,
  'css': <CSS />,
  'javascript': <JavaScript />,
  'typescript': <TypeScript />,
  'bootstrap': <Bootstrap />,
  'tailwindcss': <TailwindCSS />,
  'react': <React />,
  'python': <Python />,
  'mysql': <MySQL />,
  'postgresql': <PostgreSQL />,
  'docker': <Docker />
}

export type BadgeKey = keyof typeof BadgesComponents;

const BadgesList: BadgeKey[] = [
  'html5',
  'css',
  'javascript',
  'typescript',
  'bootstrap',
  'tailwindcss',
  'react',
  'python',
  'mysql',
  'postgresql',
  'docker'
];

export default function Badges({ badgeList = BadgesList }: { badgeList?: BadgeKey[] }) {
  return (
    <div className="flex flex-wrap gap-pf-1 justify-center">
      {
        badgeList.map((item, index) => <div key={index}>{BadgesComponents[item]}</div>)
      }
    </div>
  )
}