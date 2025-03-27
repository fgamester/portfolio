import { FeaturedAbout, formatFeaturedAbout, isFeaturedAbout } from "./FeaturedAbout"
import { filterTechnologyArray, isTechnologyArray, Technology } from "./Technology"

export type Featured = {
    about: FeaturedAbout,
    projects?: string[],
    exercises?: string[],
    technologies?: Technology[]
}

export function isFeatured(obj: any): obj is Featured {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;
    const requiredProperties = ['about'];
    const optionalProperties = ['projects', 'exercises', 'technologies'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (!isFeaturedAbout(obj.about)) return false;
    if ('projects' in obj && !isStringArray(obj.projects)) return false;
    if ('exercises' in obj && !isStringArray(obj.exercises)) return false;
    if ('technologies' in obj && !isTechnologyArray(obj.technologies)) return false;

    return true;
}

function isString(item: any): item is string {
    return typeof item === 'string';
}

function isStringArray(list: any): list is string[] {
    return Array.isArray(list) && list.every(isString);
}

function filterStringArray(list: any): string[] {
    return Array.isArray(list) ? list.filter(isString) : [];
}

export function formatFeatured(obj: any): Featured | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isFeatured(obj)) return obj as Featured;

    if ('about' in obj) obj.about = formatFeaturedAbout(obj.about);
    if ('projects' in obj) obj.projects = filterStringArray(obj.projects);
    if ('exercises' in obj) obj.exercises = filterStringArray(obj.exercises);
    if ('technologies' in obj) obj.technologies = filterTechnologyArray(obj.technologies);

    return isFeatured(obj) ? obj as Featured : undefined;
}