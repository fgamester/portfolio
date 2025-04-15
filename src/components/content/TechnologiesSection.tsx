import { ProjectTechnology } from "../../types";

export default function TechnologiesSection({ list }: { list: ProjectTechnology[] }) {
    return (
        <section id="technologies" className="w-full flex flex-col justify-center items-center gap-pf-2 md:bg-pf-dark-4 md:p-pf-3 md:rounded-2xl scroll-mt-[60px]">
            <h4 className="text-xl">
                Tecnologías utilizadas
            </h4>
            <div className="flex flex-col gap-pf-2 w-full">
                {
                    list.map((item, index) => (
                        <p className="text-justify w-full" key={index}><b>{`${item.name}: `}</b>{item.usedFor}</p>
                    ))
                }
            </div>
        </section>
    );
}
