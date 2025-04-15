import { ContactInfo, filterContactInfoArray, formatContactInfo, isContactInfoArray } from "./ContactInfo";

export type About = {
    description: string,
    image?: string,
    currentWork?: string,
    contact?: ContactInfo[]
}

export function isAbout(obj: any): obj is About {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;
    const requiredProperties = ['description'];
    const optionalProperties = ['image', 'currentWork', 'contact'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (typeof obj.description !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;
    if ('currentWork' in obj && typeof obj.currentWork !== 'string') return false;
    if ('contact' in obj && !isContactInfoArray(obj.contact)) return false;

    return true;
}

export function formatAbout(obj: any): About | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isAbout(obj)) return obj as About;

    const newObj: Partial<About> = {};
    newObj.description = obj.description;
    if ('image' in obj && typeof obj.image === 'string') newObj.image = obj.image;
    if ('currentWork' in obj && typeof obj.currentWork === 'string') newObj.currentWork = obj.currentWork;
    if ('contact' in obj && Array.isArray(obj.contact)) {
        const tempList = obj.contact.map((item: any) => formatContactInfo(item));
        newObj.contact = filterContactInfoArray(tempList);
    }

    return isAbout(newObj) ? newObj as About : undefined;
}