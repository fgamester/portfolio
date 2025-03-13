import { isProject, Project } from "./Project";

/* ----------------------------------Content---------------------------------- */
export type Content = {
    description: string,
    info?: string,
    content: Project[]
}

export function isContent(obj: any): obj is Content {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['description', 'content'];
    const optionalProperties = ['info'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('info' in obj && typeof obj.info !== 'string') return false;
    if ('content' in obj && !obj.content.every((project: Project) => isProject(project))) return false;


    return hasRequiredProperties && hasOnlyAllowedProperties;
}

