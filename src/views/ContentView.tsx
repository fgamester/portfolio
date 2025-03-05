import { useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import { useParams } from "react-router-dom";
import { Content, Data, isProject, Project, ProjectLink } from "../types";

export default function ContentView() {
    const [post, setPost] = useState<Project | undefined>(undefined);
    const { data } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        if (data && params?.category && data[params.category as keyof Data]) {
            const content = data[params.category as keyof Data] as Content;
            if (content && content.content && content.content.length > 0) {
                const found = content.content.find((item) => item.id == params.id);
                found !== undefined && setPost(() => found);
            }
        }
    }, [data, params])

    return isProject(post) ? (
        <div className="bg-pf-dark-4 md:bg-transparent md:p-pf-4 w-full flex flex-col justify-center gap-pf-3 text-pf-dark-1">
            <header className="flex justify-center">
                <h1 className="text-4xl">
                    {post?.name}
                </h1>
            </header>
            <main className="flex flex-col gap-pf-4">
                <section id="info" className="w-full flex flex-col md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl lg:flex-row">
                    <p>
                        {post?.description}
                    </p>
                    {
                        post.image && (
                            <img src={post.image} alt={`${post.name}_image`} className="lg:w-1/2" />
                        )
                    }
                </section>
                {
                    post.links && <LinksSection list={post.links} />
                }
            </main>
        </div>
    ) : (
        <h1 className="text-pf-dark-1 text-4xl p-pf-6 text-center">
            The content you're trying to access doesn't exist or is incomplete
        </h1>
    );
}

function LinksSection({ list }: { list: ProjectLink[] }) {
    return (
        <section id="links" className="w-full flex flex-col justify-center items-center gap-pf-2  md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl">
            <h4 className="text-xl">
                Links
            </h4>
            <div className="flex flex-wrap justify-center gap-pf-2">
                {
                    list.map((item, index) => (
                        <a href={item.link} key={index} target="_blank" className="py-pf-1 px-pf-2 rounded-2xl bg-pf-dark-1 text-pf-dark-6">
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </section>
    );
}
