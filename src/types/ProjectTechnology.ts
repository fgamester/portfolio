export type ProjectTechnology = {
    name: string,
    usedFor: string
}

export function isProjectTechnology(obj: any): obj is ProjectTechnology {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const requiredProperties = ['name', 'usedFor'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('usedFor' in obj && typeof obj.usedFor !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatProjectTechnology(obj: any): ProjectTechnology | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (!isProjectTechnology(obj)) return obj as ProjectTechnology;

    const newObj: Partial<ProjectTechnology> = {};

    newObj.name = obj.name;
    newObj.usedFor = obj.usedFor;

    return isProjectTechnology(newObj) ? newObj as ProjectTechnology : undefined;
}

export function filterProjectTechnologyArray(list: any): ProjectTechnology[] {
    return Array.isArray(list) ? list.filter(isProjectTechnology) : [];

}

export function isProjectTechnologyArray(list: any): list is ProjectTechnology[] {
    return Array.isArray(list) && list.length > 0 && list.every(isProjectTechnology);
}

export function isValidProjectTechnologyArray(list: any): list is ProjectTechnology[] {
    return Array.isArray(list) && list.every(isProjectTechnology);
}