import { useEffect } from "react"

export default function NotFoundView() {
  useEffect(() => {
    document.title = '404 Not Found - Portafolio';
  }, [])

  return (
    <div className="flex flex-col gap-pf-2 justify-center">
      <h1 className="text-pf-dark-1 text-6xl px-pf-6 text-center">
        404 NOT FOUND
      </h1>
      <h1 className="text-pf-dark-1 text-4xl px-pf-6 text-center">
        The content you're trying to access doesn't exist or is incomplete.
      </h1>
    </div>
  )
}
