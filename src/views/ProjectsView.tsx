import { useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import ContentPreview from "../components/global/ContentPreview";
import { isContent, isData, isProjectArray, Project } from "../types";

export default function ProjectsView() {
  const { data, updateState } = useContext(Context);
  const [projectArray, setProjectArray] = useState<Project[] | undefined>();

  useEffect(() => {
    if (isData(data) && isContent(data.projects) && updateState) updateState(data.projects.content, setProjectArray);
  }, [data?.projects]);

  return isProjectArray(projectArray) ? (
    <div className="flex flex-col items-center sm:px-pf-3 gap-pf-4 py-pf-4 text-pf-dark-1 lg:w-2/3 xl:w-1/2">
      <header>
        <h1 className="text-4xl text-center">
          Projects
        </h1>
      </header>
      <main className="flex flex-col gap-pf-4">
        {projectArray.map((item, index) => <ContentPreview item={item} key={index} index={index} group="projects" />)}
      </main>
    </div>
  ) : (
    <div className="flex flex-col items-center sm:p-pf-3 gap-pf-4 pt-pf-4 text-pf-dark-1">
      <p>{"There's no content yet :("}</p>
    </div>
  );
}
