import { GuideStep, isGuideStepArray } from "./GuideStep";

export type ProjectGuide = {
    name: string,
    description: string,
    videoLink?: string,
    steps: GuideStep[]
}

export function isProjectGuide(obj: any): obj is ProjectGuide {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const requiredProperties = ['name', 'description', 'steps'];
    const optionalProperties = ['videoLink'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('videoLink' in obj && typeof obj.videoLink !== 'string') return false;
    if ('steps' in obj && !isGuideStepArray(obj.steps)) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function filterProjectGuideArray(list: any): ProjectGuide[] {
    return Array.isArray(list) ? list.filter(isProjectGuide) : [];
}

export function isProjectGuideArray(list: any): list is ProjectGuide[] {
    return Array.isArray(list) && (list.length > 0 && list.every(isProjectGuide)) || list.length === 0;
}