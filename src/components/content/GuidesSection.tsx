import { ProjectGuide } from "../../types";

export default function GuidesSection({ list }: { list: ProjectGuide[] }) {
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
                                    <div key={stepIndex} className="flex flex-col justify-center items-star text-justify gap-pf-1">
                                        <b className="self-center">{`${stepIndex + 1}. ${step.name[0].toUpperCase()}${step.name.substring(1)}`}</b>
                                        {
                                            step.instructions.map((instruction, instructionIndex) => (
                                                <div
                                                    className="flex flex-col"
                                                    key={instructionIndex}>
                                                    <p className="text-justify w-full">{instruction.text}</p>
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
                                                </div>
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