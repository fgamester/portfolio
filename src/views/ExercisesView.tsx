import { useContext } from "react";
import { Context } from "../context/GloblalContext";
import ContentPreview from "../components/global/ContentPreview";

export default function ProjectsView() {

  const { data } = useContext(Context);

  return data?.exercises?.content.length && data?.exercises?.content.length > 0 ? (
    <div className="flex flex-col items-center sm:px-pf-3 gap-pf-4 pt-pf-4 text-pf-dark-1">
      <header>
        <h1 className="text-4xl text-center">
          Exercises
        </h1>
      </header>
      <main className="flex flex-col gap-pf-4">
        {data?.exercises.content.map((item, index) => <ContentPreview item={item} key={index} index={index} group="exercises" />)}
      </main>
    </div>
  ) : (
    <div className="flex flex-col items-center sm:p-pf-3 gap-pf-4 pt-pf-4 text-pf-dark-1">
      <p>{"There's no content yet :("}</p>
    </div>
  )
}
