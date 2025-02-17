export const HTML5 = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#E34F26]">HTML5</p>
  )
}

export const CSS = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#663399]">CSS</p>
  )
}

export const JavaScript = () => {
  return (
    <p className="text-black size-fit px-budget-x rounded-sm bg-[#F7DF1E]">JavaScript</p>
  )
}

export const TypeScript = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#3178C6]">TypeScript</p>
  )
}

export const Bootstrap = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#7952B3]">Bootstrap</p>
  )
}

export const TailwindCSS = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#06B6D4]">TailwindCSS</p>
  )
}

export const React = () => {
  return (
    <p className="text-black size-fit px-budget-x rounded-sm bg-[#61DAFB]">React</p>
  )
}

export const Python = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#3776AB]">Python</p>
  )
}

export const MySQL = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#4479A1]">MySQL</p>
  )
}

export const PostgreSQL = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#4169E1]">PostgreSQL</p>
  )
}

export const Docker = () => {
  return (
    <p className="text-white size-fit px-budget-x rounded-sm bg-[#2496ED]">Docker</p>
  )
}

export default function Badges() {
  return (
    <>
      <HTML5 />
      <CSS />
      <JavaScript />
      <TypeScript />
      <Bootstrap />
      <TailwindCSS />
      <React />
      <Python />
      <MySQL />
      <PostgreSQL />
      <Docker />
    </>
  )
}