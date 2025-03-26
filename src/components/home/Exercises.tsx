import { Link } from "react-router-dom";
import { HomeContentPreview } from "../global/ContentPreview";
import { Content } from "../../types";
import { useContext, useState } from "react";
import { Context } from "../../context/GloblalContext";

export default function Exercises({ content }: { content: Content | undefined }) {
    const { updateState } = useContext(Context);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);


    return content?.content && content.content.length > 0 ? (
        <article id="exercises" className="flex flex-col gap-pf-3">
            <header className="flex relative justify-between items-end">
                <div className="flex items-baseline gap-pf-2">
                    <h3 className='text-2xl'>
                        Exercises
                    </h3>
                    {
                        content.info &&
                        <button onClick={() => updateState(!showTooltip, setShowTooltip)} className="flex justify-center items-center size-pf-4 border-2 rounded-full text-center" title={content.info}>
                            <p className="select-none font-bold">i</p>
                        </button>
                    }
                </div>
                {showTooltip &&
                    <div className="flex flex-col absolute top-0 left-1/2 translate-x-[-50%] rounded-lg gap-pf-1 w-max max-w-full">
                        <button onClick={() => updateState(!showTooltip, setShowTooltip)} className="size-fit self-end bg-pf-dark-3 rounded-lg px-pf-2 text-center border-2 border-pf-dark-2">x</button>
                        <div className="flex flex-col bg-pf-dark-3 rounded-lg p-pf-2 border-2 border-pf-dark-2">
                            <h5 className="text-lg text-center">Acerca de los ejercicios</h5>
                            <p className="text-justify">{content.info}</p>
                        </div>
                    </div>
                }
                <Link to='/exercises' className="hover:underline underline-offset-2">
                    See more...
                </Link>
            </header>
            <div className="flex flex-col gap-pf-4">
                {content.content.map((item, index) =>
                    <HomeContentPreview item={item} group="exercises" index={index} key={index} />
                )
                }
            </div>
        </article>
    ) : null;
}
