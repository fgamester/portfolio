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

