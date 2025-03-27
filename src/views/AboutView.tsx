import { useCallback, useContext, useEffect, useState } from "react"
import { Context } from "../context/GloblalContext"
import { About, isAbout, isData } from "../types";
import NotFoundView from "./NotFoundView";
import { ContactInfo, isContactInfoArray } from "../types/ContactInfo";
import ContactBadges from "../components/global/ContactBadges";
import LoadingSpinner from "../components/global/LoadingSpinner";

export default function AboutView() {
  const { data, updateState, globalLoading } = useContext(Context);
  const [about, setAbout] = useState<About | undefined>(undefined);
  const [localLoading, setLocalLoading] = useState<boolean>(true);

  const setLocalStates = useCallback(() => {
    if (isData(data)) updateState(data.about, setAbout);
    setTimeout(() => updateState(false, setLocalLoading), 300);
  }, [data]);

  useEffect(() => {
    setLocalStates();
  }, [data?.about]);

  if (localLoading || globalLoading) return <LoadingSpinner />;

  return isAbout(about) ? (
    <div className="bg-pf-dark-4 p-pf-4 md:bg-transparent md:p-pf-4 w-full flex flex-col gap-pf-3 text-pf-dark-1">
      <header>
        <h1 className="text-4xl text-center">
          Sobre mí
        </h1>
      </header>
      <main className="flex flex-col gap-pf-3">
        <section id="iam" className="flex flex-col lg:flex-row md:bg-pf-dark-4 p-pf-3 rounded-2xl">
          <article className="flex flex-col gap-pf-2">
            <h4 className="text-xl text-center">
              ¿Quién soy?
            </h4>
            <div className="sm:block flex gap-pf-2 flex-col-reverse items-center">
              {
                about.image && (
                  <img src={about.image} title={`${data?.name} Photo`} alt={`${data?.name} Photo`}
                    className="aspect-square object-cover mx-pf-2 sm:float-right rounded-3xl w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" />
                )
              }
              <p className="text-justify">
                {about.description}
              </p>
            </div>
          </article>
        </section>
        {about.currentWork && <CurrentWorkSection paragraph={about.currentWork} />}
        {isContactInfoArray(about.contact) && <ContactInfoSection contactList={about.contact} />}
      </main>
    </div>
  ) : <NotFoundView />;
}

function CurrentWorkSection({ paragraph }: { paragraph: string }) {
  return (
    <section id="working-on" className="flex flex-col md:bg-pf-dark-4 p-pf-3 rounded-2xl">
      <h4 className="text-xl text-center">
        ¿En qué estoy trabajando actualmente?
      </h4>
      <p>
        {paragraph}
      </p>
    </section>
  );
}

function ContactInfoSection({ contactList }: { contactList: ContactInfo[] }) {
  return (
    <section id="contact-info" className="flex flex-col gap-pf-2 md:bg-pf-dark-4 p-pf-3 rounded-2xl">
      <h4 className="text-xl text-center">
        Canales de contacto
      </h4>
      <div className="flex justify-evenly flex-wrap gap-pf-2">
        {
          contactList.map((item, index) => (
            <ContactBadges label={item.label} key={index} {...item.link && { linkTo: item.link }} {...item.icon && { icon: item.icon }} />
          ))
        }
      </div>
    </section>
  );
}
