import { filterGuideStepArray, formatGuideStep, GuideStep, isGuideStepArray } from "./GuideStep";

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

    if (typeof obj.name !== 'string') return false;
    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('videoLink' in obj && typeof obj.videoLink !== 'string') return false;
    if (!isGuideStepArray(obj.steps)) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatProjectGuide(obj: any): ProjectGuide | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isProjectGuide(obj)) return obj as ProjectGuide;

    const newObj: Partial<ProjectGuide> = {};

    newObj.name = obj.name;
    newObj.description = obj.description;
    if ('videoLink' in obj && typeof obj.videoLink === 'string') newObj.videoLink = obj.videoLink;
    if ('steps' in obj && Array.isArray(obj.steps)) {
        const tempList = obj.steps.map((item: any) => formatGuideStep(item));
        const filteredList = filterGuideStepArray(tempList);
        if (filteredList.length > 0) newObj.steps = filteredList;
    }

    return isProjectGuide(newObj) ? newObj as ProjectGuide : undefined;
}

export function filterProjectGuideArray(list: any): ProjectGuide[] {
    return Array.isArray(list) ? list.filter(isProjectGuide) : [];
}

export function isProjectGuideArray(list: any): list is ProjectGuide[] {
    return Array.isArray(list) && list.length > 0 && list.every(isProjectGuide);
}

export function isValidProjectGuideArray(list: any): list is ProjectGuide[] {
    return Array.isArray(list) && list.every(isProjectGuide);
}