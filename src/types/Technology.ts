export type Technology = {
    name: string,
    image: string
}

export function isTechnology(obj: any): obj is Technology {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'image'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatTechnology(obj: any): Technology | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isTechnology(obj)) return obj as Technology;

    const newObj: Partial<Technology> = {};

    newObj.name = obj.name;
    newObj.image = obj.image;

    return isTechnology(newObj) ? newObj as Technology : undefined;
}

export function filterTechnologyArray(list: any): Technology[] {
    return Array.isArray(list) ? list.filter(isTechnology) : [];
}

export function isTechnologyArray(list: any): list is Technology[] {
    return Array.isArray(list) && list.length > 0 && list.every(isTechnology);
}

export function isValidTechnologyArray(list: any): list is Technology[] {
    return Array.isArray(list) && list.every(isTechnology);
}