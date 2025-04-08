import { Content, Data, isData, isProject, isProjectGuideArray, isProjectLinkArray, isProjectTechnologyArray, Project, ProjectGuide, ProjectLink, ProjectTechnology } from "../types";
import { useContext, useEffect, useState, Fragment, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/GloblalContext";
import NotFoundView from "./NotFoundView";
import ContentSideNavBar from "../components/content/ContentSideNavBar";
import LoadingSpinner from "../components/global/LoadingSpinner";

export default function ContentView() {
    const [post, setPost] = useState<Project | undefined>(undefined);
    const [localLoading, setLocalLoading] = useState<boolean>(true);
    const { data, updateState, globalLoading } = useContext(Context);
    const params = useParams();

    const setLocalStates = useCallback(async () => {
        if (isData(data)) {
            try {
                const content = data[params.category as keyof Data] as Content;
                const found = content.content.find((item) => item.id == params.id);
                updateState(found, setPost);
            } catch (error) {
                console.error('Error finding content:', error);
            }
        }
        setTimeout(() => updateState(false, setLocalLoading), 300);
    }, [data, params]);

    useEffect(() => {
        setLocalStates();
    }, [data, params]);

    if (localLoading || globalLoading) return <LoadingSpinner />;

    return isProject(post) ? (
        <div className="bg-pf-dark-4 p-pf-2 pb-pf-6  md:bg-transparent md:px-pf-2 w-full flex flex-col gap-pf-3 text-pf-dark-1">
            <header className="flex justify-center px-pf-8">
                <h1 className="text-4xl text-center">
                    {post?.name}
                </h1>
            </header>
            <div className="flex justify-center gap-pf-4 w-full px-pf-2 lg:px-pf-4">
                <ContentSideNavBar postData={post} />
                <main className="flex flex-col w-full gap-pf-4 flex-grow xl:flex-grow-0 xl:w-2/3">
                    <section id="info" className="w-full flex flex-col gap-pf-2 md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl lg:flex-row scroll-mt-[60px]">
                        <p className="text-justify">
                            {
                                post?.description.split(/\n/).map((line, index, array) => (
                                    <Fragment key={index}>
                                        {
                                            array.length - 1 === index ? (
                                                <>
                                                    {line}
                                                </>
                                            ) : (
                                                <>
                                                    {line}
                                                    <br className="mt-pf-1" />
                                                    <br className="mt-pf-1" />
                                                </>
                                            )
                                        }
                                    </Fragment>
                                ))
                            }
                        </p>
                        {
                            post.image && (
                                <img src={post.image} alt={`${post.name}_image`} className="lg:w-1/2 rounded-2xl" />
                            )
                        }
                    </section>
                    {isProjectLinkArray(post.links) && <LinksSection list={post.links} />}
                    {isProjectTechnologyArray(post.technologies) && <TechnologiesSection list={post.technologies} />}
                    {isProjectGuideArray(post.guides) && <GuidesSection list={post.guides} />}
                </main>
            </div>
        </div>
    ) : <NotFoundView />;
}

function LinksSection({ list }: { list: ProjectLink[] }) {
    return (
        <section id="links" className="w-full flex flex-col justify-center items-center gap-pf-2  md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl scroll-mt-[60px]">
            <h4 className="text-xl">
                Enlaces
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

function TechnologiesSection({ list }: { list: ProjectTechnology[] }) {
    return (
        <section id="technologies" className="w-full flex flex-col justify-center items-center gap-pf-2 md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl scroll-mt-[60px]">
            <h4 className="text-xl">
                Tecnologías utilizadas
            </h4>
            <div className="flex flex-col justify-center gap-pf-2">
                {
                    list.map((item, index) => (
                        <p className="text-justify" key={index}><b>{`${item.name}: `}</b>{item.usedFor}</p>
                    ))
                }
            </div>
        </section>
    );
}

function GuidesSection({ list }: { list: ProjectGuide[] }) {
    return (
        <section id="guides" className="flex flex-col gap-pf-4 scroll-mt-[60px]">
            {
                list.map((item, index) => (
                    <article key={index} className="flex flex-col gap-pf-3 justify-center md:p-pf-3 md:bg-pf-dark-4 md:rounded-2xl">
                        <h4 className="text-center text-xl font-bold">
                            {`${item.name[0].toLocaleUpperCase()}${item.name.substring(1)}`}
                        </h4>
                        {item.videoLink && <video className="object-cover w-full h-full" src={item.videoLink} />}
                        <p
                            className="text-justify">{item.description}</p>
                        <div className="flex flex-col gap-pf-2">
                            {
                                item.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="flex flex-col justify-center items-star text-justify">
                                        <b className="self-center">{`${stepIndex + 1}. ${step.name[0].toUpperCase()}${step.name.substring(1)}`}</b>
                                        {
                                            step.instructions.map((instruction, instructionIndex) => (
                                                <Fragment key={instructionIndex}>
                                                    <p className="text-justify">{instruction.text}</p>
                                                    {instruction.image && (
                                                        <img
                                                            src={instruction.image}
                                                            alt={`${step.name}_image_${instructionIndex}`}
                                                            className="rounded-2xl"
                                                        />
                                                    )}
                                                    {instruction.code && (
                                                        <pre
                                                            className="bg-pf-dark-1 rounded-lg p-pf-2 text-sm text-pf-dark-6 mt-pf-2 overflow-auto max-h-[500px]"
                                                        >
                                                            <code >{instruction.code}</code>
                                                        </pre>
                                                    )}
                                                </Fragment>
                                            ))
                                        }
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