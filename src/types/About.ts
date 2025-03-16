export type About = {
    description: string,
    image?: string
}

export function isAbout(obj: any): obj is About {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['description'];
    const optionalProperties = ['image'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatAbout(obj: any): About | undefined {
    return isAbout(obj) ? obj as About : undefined;
}