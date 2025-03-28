import { ContactInfo } from "../../types";
import ContactBadges from "./ContactBadges";

export function ContactInfoSection({ contactList }: { contactList: ContactInfo[] }) {
  return (
    <section id="contact-info" className="flex flex-col gap-pf-2 p-pf-3 scroll-mt-[60px]">
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