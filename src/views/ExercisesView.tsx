import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import ContentPreview from "../components/global/ContentPreview";
import { isContent, isData, isProjectArray, Project } from "../types";
import NotFoundView from "./NotFoundView";
import LoadingSpinner from "../components/global/LoadingSpinner";

export default function ProjectsView() {
  const { data, updateState,globalLoading } = useContext(Context);
  const [projectArray, setProjectArray] = useState<Project[] | undefined>();
  const [localLoading, setLocalLoading] = useState<boolean>(true);

  const setLocalStates = useCallback(() => {
    if (isData(data) && isContent(data.projects)) updateState(data.projects.content, setProjectArray);
    else updateState(undefined, setProjectArray);
    setTimeout(() => updateState(false, setLocalLoading), 300);
  }, [data]);

  useEffect(() => {
    setLocalStates();
  }, [data?.projects]);

  if (localLoading || globalLoading) return <LoadingSpinner />;

  return isProjectArray(projectArray) ? (
    <div className="flex flex-col items-center sm:px-pf-3 gap-pf-4 py-pf-4 text-pf-dark-1 lg:w-2/3 xl:w-1/2">
      <header>
        <h1 className="text-4xl text-center">
          Exercises
        </h1>
      </header>
      <main className="flex flex-col gap-pf-4">
        {projectArray.map((item, index) => <ContentPreview item={item} key={index} index={index} group="exercises" />)}
      </main>
    </div>
  ) : <NotFoundView />;
}
