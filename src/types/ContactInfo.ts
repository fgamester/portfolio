export type ContactInfo = {
    label: string,
    icon?: string,
    link?: string
}

export function isContactInfo(obj: any): obj is ContactInfo {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const requiredProperties = ['label'];
    const optionalProperties = ['icon', 'link'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if (!hasOnlyAllowedProperties || !hasRequiredProperties) return false;

    if (typeof obj?.label !== 'string') return false;
    if ('icon' in obj && typeof obj?.icon !== 'string') return false;
    if ('link' in obj && typeof obj?.link !== 'string') return false;

    return true;
}

export function filterContactInfoArray(list: any): ContactInfo[] {
    return Array.isArray(list) ? list.filter(isContactInfo) : [];
}

export function isContactInfoArray(list: any): list is ContactInfo[] {
    return Array.isArray(list) && list.length > 0 && list.every(isContactInfo);
}