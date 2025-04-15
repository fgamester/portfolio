import { ProjectLink } from "../../types";

export default function LinksSection({ list }: { list: ProjectLink[] }) {
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
