export default function FeaturedAboutSection({ description, name, image }: { description: string, name: string, image?: string }) {
    return (
        <article id="who-am-i" className="flex flex-col gap-pf-3 scroll-mt-[60px]">
            <header className="flex relative justify-between items-end">
                <div className="flex items-baseline gap-pf-2">
                    <h3 className='text-2xl'>
                        ¿Quién soy?
                    </h3>
                </div>
            </header>
            <div className="flex flex-col-reverse items-center sm:block p-pf-4 gap-pf-2 bg-pf-dark-4 rounded-2xl">
                {
                    image && (
                        <img src={image} alt={`${name} Photo`} className="sm:float-right aspect-square w-1/4 object-cover mx-pf-2 rounded-3xl" />
                    )
                }
                <p className="text-justify">
                    {description}
                </p>
            </div>
        </article>
    );
}
