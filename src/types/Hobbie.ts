export type Hobby = {
    name: string,
    description: string,
    image?: string
}

export function isHobby(obj: any): obj is Hobby {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'description'];
    const optionalProperties = ['image'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

