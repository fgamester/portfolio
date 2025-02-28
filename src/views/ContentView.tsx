import { useContext, useEffect, useState } from "react";
import { Context } from "../context/GloblalContext";
import { useParams } from "react-router-dom";
import { Content, Data, Project } from "../types";

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

    return (
        <div className="bg-pf-dark-3">
            <div className="flex flex-col">
                <p>
                    {params.category}
                </p>
                <p>
                    {post?.id}
                </p>
            </div>
        </div>
    )
}
