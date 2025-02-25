import { Link } from "react-router-dom";
import { HomeContentPreview } from "../global/ContentPreview";
import { Content } from "../../types";

export default function Exercises({ content }: { content: Content | undefined }) {
    return content ? (
        <article id="projects" className="flex flex-col gap-pf-3">
            <header className="flex justify-between items-end">
                <div className="flex items-baseline gap-pf-2">
                    <h3 className='text-2xl'>
                        Exercises
                    </h3>
                    {
                        content.info &&
                        <div className="flex justify-center items-center size-pf-4 border-2 rounded-full text-center" title={content.info}>
                            <p className="select-none font-bold">i</p>
                        </div>
                    }
                </div>
                <Link to='/exercises' className="hover:underline underline-offset-2">
                    See more...
                </Link>
            </header>
            <div className="flex flex-col gap-pf-4">
                {content.content.map((item, index) =>
                    <HomeContentPreview item={item} category="exercises" index={index} key={index} />
                )
                }
            </div>
        </article>
    ) : null;
}
