import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import { useParams } from "react-router-dom";
import { Content, Data, filterProjectLinkArray, filterTags, isProject, Project, ProjectGuide, ProjectLink, ProjectTechnology } from "../types";

export default function ContentView() {
    const [post, setPost] = useState<Project | undefined>(undefined);
    const { data, updateState } = useContext(Context);
    const params = useParams();


    const filterPostProps = useCallback(() => {
        setPost(old => {
            if (old?.tags && old.tags.length > 0) old.tags = filterTags(old.tags);
            if (old?.links && old.links.length > 0) old.links = filterProjectLinkArray(old.links);

            return old;
        })
    }, [params]);

    useEffect(() => {
        if (data && params?.category && data[params.category as keyof Data]) {
            const content = data[params.category as keyof Data] as Content;
            if (content && content.content && content.content.length > 0) {
                const found = content.content.find((item) => item.id == params.id);
                if (found) {
                    updateState && updateState(found, setPost);
                    filterPostProps();
                }
            }
        }
    }, [data, params]);

    return isProject(post) ? (
        <div className="bg-pf-dark-4 p-pf-4 md:bg-transparent md:p-pf-4 w-full flex flex-col justify-center gap-pf-3 text-pf-dark-1">
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
                            <img src={post.image} alt={`${post.name}_image`} className="lg:w-1/2 rounded-2xl" />
                        )
                    }
                </section>
                {post.links && post.links.length > 0 && <LinksSection list={post.links} />}
                {post.technologies && post.technologies.length > 0 && <TechnologiesSection list={post.technologies} />}
                {post.guides && post.guides.length > 0 && <GuidesSection list={post.guides} />}
            </main>
        </div>
    ) : (
        <h1 className="text-pf-dark-1 text-4xl p-pf-6 text-center">
            The content you're trying to access doesn't exist or is incomplete.
        </h1>
    );
}

function LinksSection({ list }: { list: ProjectLink[] }) {
    const filteredList = filterProjectLinkArray(list);
    
    return filteredList.length > 0 ? (
        <section id="links" className="w-full flex flex-col justify-center items-center gap-pf-2  md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl">
            <h4 className="text-xl">
                Links
            </h4>
            <div className="flex flex-wrap justify-center gap-pf-2">
                {
                    filteredList.map((item, index) => (
                        <a href={item.link} key={index} target="_blank" className="py-pf-1 px-pf-2 rounded-2xl bg-pf-dark-1 text-pf-dark-6">
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </section>
    ) : null;
}

function TechnologiesSection({ list }: { list: ProjectTechnology[] }) {
    return (
        <section id="technologies" className="w-full flex flex-col justify-center items-center gap-pf-2  md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl">
            <h4 className="text-xl">
                Technologies
            </h4>
            <div className="flex flex-col justify-center gap-pf-2">
                {
                    list.map((item, index) => (
                        <p key={index}><b>{`${item.name}: `}</b>{item.usedFor}</p>
                    ))
                }
            </div>
        </section>
    );
}

function GuidesSection({ list }: { list: ProjectGuide[] }) {
    return (
        <section id="guides" className="flex flex-col gap-pf-4">
            {
                list.map((item, index) => (
                    <article key={index} className="flex flex-col w-full gap-pf-3 justify-center md:p-pf-3 md:bg-pf-dark-4 md:rounded-2xl">
                        <h4 className="text-center text-xl font-bold">
                            {`${item.name[0].toLocaleUpperCase()}${item.name.substring(1)}`}
                        </h4>
                        {item.videoLink && <video className="object-cover w-full h-full" src={item.videoLink} />}
                        <p>{item.description}</p>
                        <div className="flex flex-col gap-pf-2">
                            {
                                item.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="flex flex-col justify-center items-center">
                                        <b>{`${step.name[0].toUpperCase()}${step.name.substring(1)}:`}</b>
                                        <p>{`${step.instructions}`}</p>
                                        {step.image && (
                                            <img className="mt-pf-2 lg:w-2/3 rounded-2xl" src={step.image} alt={`${step.name}_image`} />
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    </article>
                ))
            }
        </section>
    );
}