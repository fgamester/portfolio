/* ----------------------------------Project Technology---------------------------------- */
export type ProjectTechnology = {
    name: string,
    usedFor: string
}

export function isProjectTechnology(obj: any): obj is ProjectTechnology {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'usedFor'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('usedFor' in obj && typeof obj.usedFor !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

