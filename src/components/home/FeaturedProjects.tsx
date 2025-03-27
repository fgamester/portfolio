import { Project } from "../../types";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/GloblalContext";
import { HomeContentPreview } from "../global/ContentPreview";

export default function FeaturedProjects({ contentList, info }: { contentList: Project[], info?: string }) {
    const { updateState } = useContext(Context);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    return (
        <article id="projects" className="flex flex-col gap-pf-3">
            <header className="flex relative justify-between items-end">
                <div className="flex items-baseline gap-pf-2">
                    <h3 className='text-2xl'>
                        Projects
                    </h3>
                    {
                        info &&
                        <button onClick={() => updateState(!showTooltip, setShowTooltip)} className="flex justify-center items-center size-pf-4 border-2 rounded-full text-center" title={info}>
                            <p className="select-none font-bold">i</p>
                        </button>
                    }
                </div>
                {info && showTooltip &&
                    <div className="flex flex-col absolute top-0 left-1/2 translate-x-[-50%] rounded-lg gap-pf-1 w-max max-w-full">
                        <button onClick={() => updateState(!showTooltip, setShowTooltip)} className="size-fit self-end bg-pf-dark-3 rounded-lg px-pf-2 text-center border-2 border-pf-dark-2">x</button>
                        <div className="flex flex-col bg-pf-dark-3 rounded-lg p-pf-2 border-2 border-pf-dark-2">
                            <h5 className="text-lg text-center">Acerca de los proyectos</h5>
                            <p className="text-justify">{info}</p>
                        </div>
                    </div>
                }
                <Link to='/projects' className="hover:underline underline-offset-2">
                    See more...
                </Link>
            </header>
            <div>
                {contentList.map((item, index) =>
                    <HomeContentPreview item={item} group="projects" index={index} key={index} />
                )
                }
            </div>
        </article>
    );
}
