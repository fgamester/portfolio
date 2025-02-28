import { useContext } from "react";
import { Context } from "../context/GloblalContext";
import ContentPreview from "../components/global/ContentPreview";

export default function ProjectsView() {

  const { data } = useContext(Context);

  return data?.projects?.content.length && data?.projects?.content.length > 0 ? (
    <div className="flex flex-col items-center sm:px-pf-3 gap-pf-4 pt-pf-4 text-pf-dark-1 lg:w-2/3 xl:w-1/2">
      <header>
        <h1 className="text-4xl text-center">
          Projects
        </h1>
      </header>
      <main className="flex flex-col gap-pf-4">
        {data?.projects.content.map((item, index) => <ContentPreview item={item} key={index} index={index} group="projects" />)}
      </main>
    </div>
  ) : (
    <div className="flex flex-col items-center sm:p-pf-3 gap-pf-4 pt-pf-4 text-pf-dark-1">
      <p>{"There's no content yet :("}</p>
    </div>
  );
}
