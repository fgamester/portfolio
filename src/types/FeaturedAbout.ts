import { ContactInfo, filterContactInfoArray, formatContactInfo, isContactInfoArray } from "./ContactInfo";

export type FeaturedAbout = {
    description: string,
    name: string,
    alias: string,
    contact?: ContactInfo[],
    image?: string
}

export function isFeaturedAbout(obj: any): obj is FeaturedAbout {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;
    const requiredProperties = ['description', 'name', 'alias'];
    const optionalProperties = ['image', 'contact'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (typeof obj.description !== 'string') return false;
    if (typeof obj.name !== 'string') return false;
    if (typeof obj.alias !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;
    if ('contact' in obj && !isContactInfoArray(obj.contact)) return false;

    return true;
}

export function formatFeaturedAbout(obj: any): FeaturedAbout | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isFeaturedAbout(obj)) return obj as FeaturedAbout;

    const newObj: Partial<FeaturedAbout> = {};
    newObj.description = obj.description;
    newObj.name = obj.name;
    newObj.alias = obj.alias;
    if ('contact' in obj && Array.isArray(obj.contact)) {
        const tempList = obj.contact.map((item: any) => formatContactInfo(item));
        newObj.contact = filterContactInfoArray(tempList);
    }

    return isFeaturedAbout(newObj) ? newObj as FeaturedAbout : undefined;
}