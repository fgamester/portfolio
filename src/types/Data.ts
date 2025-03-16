import { About, formatAbout, isAbout } from "./About";
import { Activity, isActivity } from "./Activity";
import { Content, formatContent, isContent } from "./Content";
import { Hobby, isHobby } from "./Hobbie";
import { filterTechnologyArray, isTechnologyArray, Technology } from "./Technology";

export type Data = {
    name: string,
    alias: string,
    about?: About,
    technologies?: Technology[],
    projects?: Content,
    exercises?: Content,
    hobbies?: (Hobby | Activity)[]
}

export function isData(obj: any): obj is Data {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'alias'];
    const optionalProperties = ['about', 'technologies', 'projects', 'exercises', 'hobbies'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('alias' in obj && typeof obj.alias !== 'string') return false;
    if ('about' in obj && obj.about !== undefined && !isAbout(obj.about)) return false;
    if ('technologies' in obj && obj.technologies !== undefined && !isTechnologyArray(obj.technologies)) return false;
    if ('projects' in obj && obj.projects !== undefined && !isContent(obj.projects)) return false;
    if ('exercises' in obj && obj.exercises !== undefined && !isContent(obj.exercises)) return false;
    if ('hobbies' in obj && obj.hobbies !== undefined && !obj.hobbies.every((item: Hobby | Activity) => isHobby(item) || isActivity(item))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatData(obj: any): Data | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isData(obj)) return obj as Data;

    if ('about' in obj) obj.about = formatAbout(obj.about);
    if ('technologies' in obj) obj.technologies = filterTechnologyArray(obj.technologies);
    if ('projects' in obj) obj.projects = formatContent(obj.projects);
    if ('exercises' in obj) obj.exercises = formatContent(obj.exercises);
    if ('hobbies' in obj) obj.hobbies = obj.hobbies.filter((item: any) => isActivity(item) || isHobby(item));

    return isData(obj) ? obj as Data : undefined;
}