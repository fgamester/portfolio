export type ProjectLink = {
    name: string,
    link: string,
    icon?: string
}

export function isProjectLink(obj: any): obj is ProjectLink {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const requiredProperties = ['name', 'link'];
    const optionalProperties = ['icon'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('link' in obj && typeof obj.link !== 'string') return false;
    if ('icon' in obj && typeof obj.icon !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function filterProjectLinkArray(list: any): ProjectLink[] {
    return Array.isArray(list) ? list.filter(isProjectLink) : [];
}

export function isProjectLinkArray(list: any): list is ProjectLink[] {
    return Array.isArray(list) && list.length > 0 && list.every(isProjectLink);
}
