import MetaTags from "../components/global/MetaTags";

export default function NotFoundView() {
  return (
    <div className="flex flex-col gap-pf-2 justify-center">
      <MetaTags title="404 Not Found - Portafolio" description="La página que estás buscando no existe o está incompleta." />
      <h1 className="text-pf-dark-1 text-6xl px-pf-6 text-center">
        ERROR 404 NOT FOUND
      </h1>
      <h1 className="text-pf-dark-1 text-4xl px-pf-6 text-center">
        El contenido que buscas no existe o está incompleto.
      </h1>
    </div>
  )
}
