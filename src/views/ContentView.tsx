import { Content, Data, isData, isProject, isProjectGuideArray, isProjectLinkArray, isProjectTechnologyArray, Project } from "../types";
import { useContext, useEffect, useState, Fragment, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/GloblalContext";
import NotFoundView from "./NotFoundView";
import ContentSideNavBar from "../components/content/ContentSideNavBar";
import LoadingSpinner from "../components/global/LoadingSpinner";
import MetaTags from "../components/global/MetaTags";
import LinksSection from "../components/content/LinksSection";
import TechnologiesSection from "../components/content/TechnologiesSection";
import GuidesSection from "../components/content/GuidesSection";

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
            <MetaTags title={`${post.name} - Proyecto`} description={post.description.split("\n")[0]} index />
            <header className="flex justify-center px-pf-8">
                <h1 className="text-4xl text-center">
                    {post?.name}
                </h1>
            </header>
            <div className="flex justify-center gap-pf-4 w-full px-pf-2 lg:px-pf-4">
                <ContentSideNavBar postData={post} />
                <main className="flex flex-col w-full gap-pf-4 flex-grow lg:w-3/4 xl:flex-grow-0 xl:w-2/3">
                    <section id="info" className="w-full flex flex-col gap-pf-2 md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl lg:flex-row scroll-mt-[60px]">
                        <p className="text-justify w-full">
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